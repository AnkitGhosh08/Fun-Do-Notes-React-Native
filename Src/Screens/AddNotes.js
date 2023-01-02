import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../Navigations/AuthProvider';
import {addNote, updateData} from '../Services/NoteServices';
import BottomSheetModal from '../Components/BottomSheetModal';

const AddNotes = ({navigation, route}) => {
  let noteData = route.params;
  //console.log('note data.....', noteData)

  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(noteData?.editData?.title || '');
  const [note, setNote] = useState(noteData?.editData?.note || '');
  const [pinData, setPinData] = useState(noteData?.editData?.pinData || false);
  const [archiveData, setArchiveData] = useState(
    noteData?.editData?.archiveData || false,
  );
  const [reminderData, setReminderData] = useState(
    noteData?.editData?.reminderData || '',
  );
  const [deleteData, setDeleteData] = useState(
    noteData?.editData?.isDeleted || false,
  );

  const {user} = useContext(AuthContext);

  const onBackPress = async () => {
    let userId = user.uid;
    let noteId = route.params?.id;
    if (noteId) {
      await updateData(
        title,
        note,
        userId,
        noteId,
        pinData,
        archiveData,
        reminderData,
        deleteData,
      );
    } else
      await addNote(
        title,
        note,
        userId,
        pinData,
        archiveData,
        reminderData,
        deleteData,
      );
    navigation.navigate('Home');
  };

  const handelPin = () => {
    setPinData(!pinData);
  };
  const handelArchive = () => {
    setArchiveData(!archiveData);
  };

  return (
    <View>
      <View style={style.container}>
        <TouchableOpacity onPress={onBackPress} style={{marginLeft: 20}}>
          <Ionicons name={'arrow-back-outline'} size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={style.PinIcon} onPress={handelPin}>
          <Icons
            name={'pin-outline'}
            size={30}
            color={pinData ? '#a507e3' : 'grey'}
          />
        </TouchableOpacity>

        <TouchableOpacity style={style.bellIcon}>
          <Icons name={'bell-outline'} size={30} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={style.archiveIcon} onPress={handelArchive}>
          <Icons
            name={'archive-arrow-down'}
            size={30}
            color={archiveData ? '#a507e3' : 'gray'}
          />
        </TouchableOpacity>
      </View>

      <TextInput
        style={style.text}
        placeholder="Title"
        value={title}
        onChangeText={value => setTitle(value)}
      />

      <TextInput
        style={style.textInput}
        placeholder="Note"
        multiline={true}
        value={note}
        onChangeText={value => setNote(value)}
      />

      <View style={style.modalView}>
        <TouchableOpacity
          style={style.dotsIcon}
          onPress={() => setModal(!modal)}>
          <Ionicons name={'ellipsis-vertical-sharp'} size={30} color="black" />
        </TouchableOpacity>
        <BottomSheetModal
          modal={modal}
          setModal={setModal}
          navigation={navigation}
        />

        {/* <View style={style.centeredView}>
          <Modal
            transparent
            animationType="fade"
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={style.Containers}>
              <View style={style.background}>
                <Text style={{color: 'black'}}> Delete </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#d259f7',
                    margin: 30,
                    borderRadius: 10,
                  }}
                  onPress={() => {}}
                />
              </View>
            </View>
          </Modal>
        </View> */}
      </View>
    </View>
  );
};
export default AddNotes;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //backgroundColor:'black',
    height: 40,
    width: '100%',
    marginTop: 20,
  },
  PinIcon: {
    marginLeft: 200,
  },

  bellIcon: {
    marginLeft: 20,
  },
  archiveIcon: {
    marginLeft: 20,
  },
  textInput: {
    fontSize: 25,
    width: '100%',
    marginLeft: 20,
  },
  text: {
    marginTop: 20,
    hight: 20,
    width: '100%',
    marginLeft: 10,
    fontSize: 40,
    fontWeight: 'bold',
  },
  dotsIcon: {
    marginTop: 570,
    marginLeft: 350,
  },
  Containers: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 60,
  },
  background: {
    backgroundColor: '#dac5e6',
    flex: 0.5,
    padding: 50,
    borderRadius: 20,
  },
  modalView: {
    flexDirection: 'row',
  },
});
