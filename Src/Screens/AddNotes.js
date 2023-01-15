import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../Navigations/AuthProvider';
import {addNote, updateData} from '../Services/NoteServices';
import BottomSheetModal from '../Components/BottomSheetModal';
import BottomSheetReminder from '../Components/BottomSheetReminder';
import PushNotification from 'react-native-push-notification';

const Chip = ({children}) => <Text style={style.chipText}>{children}</Text>;

const AddNotes = ({navigation, route}) => {
  let noteData = route.params;
  //console.log('note data.....', noteData);

  const labelData = route.params?.labelData || [];
  // console.log(labelData, '11111111');
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [viewModal, setViewModal] = useState(false);
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
        labelData,
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
        labelData,
      );
    navigation.navigate('Home');
  };

  const handelPin = () => {
    setPinData(!pinData);
  };
  const handelArchive = () => {
    setArchiveData(!archiveData);
  };

  // const handelNotification = () => {
  //   PushNotification.cancelAllLocalNotifications();
  //   PushNotification.localNotification({
  //     // title: item.note,
  //     message: text,
  //   });
  // };

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

        <View>
          <TouchableOpacity
            style={style.bellIcon}
            onPress={() => setViewModal(!viewModal)}>
            <Icons name={'bell-outline'} size={30} color="gray" />
          </TouchableOpacity>
          <BottomSheetReminder
            viewModal={viewModal}
            setViewModal={setViewModal}
            text={text}
            setText={setText}
            date={date}
            setDate={setDate}
            navigation={navigation}
          />
        </View>

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

      <View style={style.reminderStyle}>
        <TouchableOpacity>
          <Text style={style.reminderText}>{text}</Text>
        </TouchableOpacity>
      </View>
      <View style={style.chipStyle}>
        <TouchableOpacity onPress={() => navigation.navigate('AddLabels')}>
          {labelData.map(labels => (
            <Chip key={labels.labelId}>{labels.label}</Chip>
          ))}
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={style.dotsIcon}
          onPress={() => setModal(!modal)}>
          <Ionicons name={'ellipsis-vertical-sharp'} size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={style.modalView}>
        <BottomSheetModal
          modal={modal}
          setModal={setModal}
          navigation={navigation}
          noteData={noteData}
        />
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
    marginTop: 500,
    marginLeft: 350,
  },
  modalView: {
    justifyContent: 'flex-end',
  },
  chipText: {
    borderRadius: 15,
    //borderBottomRightRadius: 30,
    //borderTopRightRadius: 30,
    color: 'white',
    backgroundColor: '#a507e3',
    fontSize: 14,
    padding: 10,
    margin: 10,
  },
  chipStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  reminderText: {
    borderRadius: 30,
    color: 'black',
    //backgroundColor: '#a507e3',
    fontSize: 14,
    padding: 10,
    margin: 10,
  },
  reminderStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
