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

const Home = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [pinData, setPinData] = useState([]);
  const [noteData, setNoteData] = useState([]);

  const toggle = useSelector(state => state.toggle);

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
    // console.log(pin)
    // console.log(other)

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
    {title: 'PINNED', data: [{list: pinData}]},
    {title: 'others', data: [{list: noteData}]},
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
    return (
      <View>
        <Text style={{color: '#a507e3', fontWeight: 'bold', fontSize: 17}}>
          {section.title}
        </Text>
      </View>
    );
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
        {/* <FlatList
          data={noteData}
          numColumns={2}
          key={2}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={toggle ? styles.grid : styles.list}
              onPress={() => {
                setToggle(!toggle);
              }}>
              <NoteCard {...item} />
            </TouchableOpacity>
          )}
        /> */}
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
    flex: 1,
    alignContent: 'center',
  },
  Top: {
    justifyContent: 'flex-start',
    margin: 8,
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  middle: {
    flex: 2,
  },
  titleStyle: {
    fontFamily: 'bold',
    color: '#dac5e6',
  },
  list: {
    width: '100%',
  },

  grid: {
    width: '50%',
  },
});
