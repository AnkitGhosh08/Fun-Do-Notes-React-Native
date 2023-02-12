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
import ReminderNotifications from '../Services/ReminderNotifications';
import moment from 'moment';
import {
  ALIGNITEMS,
  COLOR,
  FLEXDIRECTION,
  FONTWEIGHT,
  JUSTIFYCONTENT,
  WIDTH,
} from '../Utility/Theme';

const Chip = ({children}) => <Text style={style.chipText}>{children}</Text>;

const AddNotes = ({navigation, route}) => {
  let noteData = route.params;

  const labelData = route.params?.labelData || [];

  const [date, setDate] = useState(noteData?.editData?.reminderData || '');
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

  const timeAndDate = moment(date).format('LLLL');

  const {user} = useContext(AuthContext);

  const receiveId = route.params?.id;

  let noteId = receiveId || Date.now().toString().substring(0, 10);

  const onBackPress = async () => {
    let userId = user.uid;
    if (receiveId) {
      await updateData(
        title,
        note,
        userId,
        noteId,
        pinData,
        archiveData,
        deleteData,
        date.toString(),
        labelData,
      );
    } else
      await addNote(
        title,
        note,
        userId,
        pinData,
        archiveData,
        deleteData,
        date.toString(),
        labelData,
        noteId,
      );

    if (date) {
      ReminderNotifications.setReminder(date, title, note, noteId);
    }
    navigation.navigate('Home');
  };

  const handelPin = () => {
    setPinData(!pinData);
  };
  const handelArchive = () => {
    setArchiveData(!archiveData);
  };

  const handelCancelNotification = () => {
    ReminderNotifications.cancelNotification(noteId);
    setDate('');
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
            color={pinData ? '#a507e3' : '#353336'}
          />
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={style.bellIcon}
            onPress={() => setViewModal(!viewModal)}>
            <Icons name={'bell-outline'} size={30} color="#353336" />
          </TouchableOpacity>

          <BottomSheetReminder
            viewModal={viewModal}
            setViewModal={setViewModal}
            date={date}
            setDate={setDate}
            navigation={navigation}
          />
        </View>

        <TouchableOpacity style={style.archiveIcon} onPress={handelArchive}>
          <Icons
            name={'archive-arrow-down'}
            size={30}
            color={archiveData ? '#a507e3' : '#353336'}
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

      {date !== '' ? (
        <View style={style.reminderStyle}>
          <Text style={style.reminderText}>{timeAndDate}</Text>
          <TouchableOpacity onPress={() => handelCancelNotification()}>
            <Icons name={'close'} size={30} color="#7a43ab" />
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={style.chipStyle}>
        <TouchableOpacity onPress={() => navigation.navigate('AddLabels')}>
          {labelData.map(labels => (
            <Chip key={labels.labelId}>{labels.label}</Chip>
          ))}
        </TouchableOpacity>
      </View>

      <View>
        <View style={style.dotsIcon}>
          <TouchableOpacity>
            <Ionicons name={'color-palette-sharp'} size={30} color="#353336" />
          </TouchableOpacity>

          <Text
            style={{
              color: 'black',
              marginTop: 5,
            }}>
            {moment(Date.now()).format('LLL')}
          </Text>

          <TouchableOpacity
            style={{marginLeft: 30}}
            onPress={() => setModal(!modal)}>
            <Ionicons
              name={'ellipsis-vertical-sharp'}
              size={30}
              color="#353336"
            />
          </TouchableOpacity>
        </View>
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
    flexDirection: FLEXDIRECTION.DIRECTION,
    height: 40,
    width: WIDTH.FULL,
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
    width: WIDTH.FULL,
    marginLeft: 20,
  },
  text: {
    marginTop: 20,
    hight: 20,
    width: WIDTH.FULL,
    marginLeft: 10,
    fontSize: 40,
    fontWeight: FONTWEIGHT.WEIGHT,
  },
  dotsIcon: {
    marginTop: 550,
    flexDirection: FLEXDIRECTION.DIRECTION,
    justifyContent: JUSTIFYCONTENT.EVENLY,
  },
  modalView: {
    justifyContent: JUSTIFYCONTENT.END,
  },
  chipText: {
    borderRadius: 15,
    color: COLOR.APP_BACKGROUND,
    backgroundColor: COLOR.ADD_ICON,
    fontSize: 14,
    padding: 10,
    margin: 10,
  },
  chipStyle: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    justifyContent: JUSTIFYCONTENT.CONTENT,
    alignItems: ALIGNITEMS.ITEM,
  },
  reminderText: {
    borderRadius: 30,
    color: COLOR.APP_BACKGROUND,
    backgroundColor: COLOR.ADD_ICON,
    fontSize: 14,
    padding: 10,
    margin: 10,
  },
  reminderStyle: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    justifyContent: JUSTIFYCONTENT.CONTENT,
    alignItems: ALIGNITEMS.ITEM,
  },
});
