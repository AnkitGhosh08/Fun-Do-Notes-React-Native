import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../Navigations/AuthProvider';
import {fetchingNote} from '../Services/NoteServices';
import NoteCard from '../Components/NoteCard';
import {COLOR, FLEXDIRECTION} from '../Utility/Theme';

const SerachBar = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [searchData, setSearchData] = useState([]);
  const [outPut, setOutPut] = useState([]);

  const getData = async () => {
    const data = await fetchingNote(user.uid);
    setSearchData(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);

  const updateSearch = text => {
    const filtered = searchData.filter(
      data =>
        data.title.toLowerCase().includes(text.toLowerCase()) ||
        data.note.toLowerCase().includes(text.toLowerCase()),
    );
    setOutPut(text);
    setSearchData(filtered);
  };

  const goToUpdateNote = ({item}) => {
    navigation.navigate('AddNotes', {editData: item, id: item.id});
  };
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="arrow-back-outline" size={30} color="#353336" />
        </TouchableOpacity>

        <TextInput
          style={styles.TextInput}
          value={outPut}
          placeholder="Search Your Note"
          onChangeText={updateSearch}
        />
      </View>

      <FlatList
        data={searchData}
        keyExtractor={item => {
          item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                goToUpdateNote({item});
              }}>
              <NoteCard {...item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default SerachBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    height: 50,
    backgroundColor: COLOR.TOPBAR_BACKGROUND,
    borderRadius: 25,
    margin: 10,
  },
  icon: {
    margin: 10,
  },
  TextInput: {
    fontSize: 18,
  },
});
