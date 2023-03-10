import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  SectionList,
} from 'react-native';
import BottomBar from '../Components/BottomBar';
import TopBar from '../Components/TopBar';
import {AuthContext} from '../Navigations/AuthProvider';
import {fetchingNote} from '../Services/NoteServices';
import NoteCard from '../Components/NoteCard';
import {useSelector} from 'react-redux';
import stringsOfLanguages from '../Utility/Localization';
import {
  ALIGNCONTENT,
  COLOR,
  FLEX,
  FONTSIZE,
  FONTWEIGHT,
  JUSTIFYCONTENT,
  MAGIN,
  WIDTH,
} from '../Utility/Theme';

const Home = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [pinData, setPinData] = useState([]);
  const [noteData, setNoteData] = useState([]);

  const toggle = useSelector(state => state.toggle);
  const localization = useSelector(state => state.localization);

  const getData = async () => {
    const data = await fetchingNote(user.uid);
    let pin = [];
    let other = [];

    data.forEach(item => {
      if (item.pinData && !item.archiveData) {
        pin.push(item);
      }
      if (!item.pinData && !item.archiveData) {
        other.push(item);
      }
    });
    setNoteData(other);
    setPinData(pin);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);

  const goToUpdateNote = ({item}) => {
    navigation.navigate('AddNotes', {
      editData: item,
      id: item.id,
      labelData: item.labelData,
    });
  };

  const section = [
    {
      title: localization
        ? stringsOfLanguages?._props.en.PINNED
        : stringsOfLanguages?._props.Hindi.PINNED,
      data: [{list: pinData}],
    },
    {
      title: localization
        ? stringsOfLanguages?._props.en.OTHERS
        : stringsOfLanguages?._props.Hindi.OTHERS,
      data: [{list: noteData}],
    },
  ];

  const renderItem = ({item}) => {
    return (
      <FlatList
        data={item.list}
        scrollEnabled={false}
        numColumns={toggle ? 2 : 1}
        key={toggle ? 2 : 1}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={toggle ? styles.grid : styles.list}
            onPress={() => {
              goToUpdateNote({item});
            }}>
            <NoteCard {...item} />
          </TouchableOpacity>
        )}
      />
    );
  };

  const header = ({section}) => {
    if (pinData?.length) {
      return (
        <View>
          <Text style={styles.title}>{section.title}</Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.Container}>
      <View style={styles.Top}>
        <TopBar />
      </View>

      <View style={styles.middle}>
        <SectionList
          sections={section}
          renderSectionHeader={header}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.bottom}>
        <BottomBar navigation={navigation} />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  Container: {
    flex: FLEX.FLEX,
    alignContent: ALIGNCONTENT.CENTER,
  },
  Top: {
    justifyContent: JUSTIFYCONTENT.CONTENT,
    margin: MAGIN.TOP,
  },
  bottom: {
    justifyContent: JUSTIFYCONTENT.END,
  },
  middle: {
    flex: FLEX.DOUBLE,
  },
  titleStyle: {
    fontFamily: FONTWEIGHT.WEIGHT,
    color: COLOR.TOPBAR_BACKGROUND,
  },
  list: {
    width: WIDTH.FULL,
  },
  grid: {
    width: WIDTH.HALF,
  },
  title: {
    color: COLOR.TITLE,
    fontWeight: FONTWEIGHT.WEIGHT,
    fontSize: FONTSIZE.HOME_TITLE,
  },
});
