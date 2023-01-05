import React, {useEffect, useContext, useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Notecard from '../Components/NoteCard';
import {AuthContext} from '../Navigations/AuthProvider';
import {fetchingNote} from '../Services/NoteServices';

const Delete = ({navigation}) => {
  const {user} = useContext(AuthContext);

  const [noteData, setNoteData] = useState([]);

  const getData = async () => {
    const notes = await fetchingNote(user.uid);
    let deleteData = [];
    notes.forEach(result => {
      if (result.deleteData) {
        deleteData.push(result);
      }
    });

    setNoteData(deleteData);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);

  return (
    <View>
      <View style={styles.list}>
        <FlatList
          data={noteData}
          renderItem={({item}) => (
            <TouchableOpacity onPress={{}}>
              <Notecard {...item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.noteId}
          numColumns={2}
          key={item => item.noteId}
        />
      </View>
    </View>
  );
};

export default Delete;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  list: {
    flex: 8,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
