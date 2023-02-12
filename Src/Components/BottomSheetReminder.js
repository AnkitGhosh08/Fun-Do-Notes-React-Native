import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {
  BORDERRADIUS,
  COLOR,
  FLEX,
  FLEXDIRECTION,
  FONTSIZE,
  JUSTIFYCONTENT,
  MAGIN,
  MARGINLIFT,
  MARGINTOP,
  PADDING,
} from '../Utility/Theme';

const BottomSheetReminder = ({
  navigation,
  viewModal,
  setViewModal,
  date,
  setDate,
}) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const tomorrowMorning = moment()
    .add(1, 'day')
    .hour(8)
    .minute(0)
    .format('HH : mm ');

  const tomorrowEvening = moment()
    .add(1, 'day')
    .hour(18)
    .minute(0)
    .format('HH : mm ');

  const onChange = (event, selectedDate) => {
    setShow(false);

    const currentDate = selectedDate || date;
    //let tempDate = new Date(currentDate);

    let fullDate =
      //   tempDate.getDate() +
      //   '/' +
      //   (tempDate.getMonth() + 1) +
      //   '/' +
      //   tempDate.getFullYear();
      // let fullTime = '' + tempDate.getHours() + ' : ' + tempDate.getMinutes();
      setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={viewModal}
        onRequestClose={() => {
          setViewModal(false);
        }}>
        <View style={styles.Container}>
          <View style={styles.background}>
            <TouchableOpacity style={styles.icon}>
              <Icons name={'clock-time-four'} size={30} color="#353336" />
              <Text style={styles.text}>Tomorrow Morning</Text>
              <Text style={styles.text}>{tomorrowMorning}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Icons name={'clock-time-four'} size={30} color="#353336" />
              <Text style={styles.text}>Tomorrow evening</Text>
              <Text style={styles.text}>{tomorrowEvening}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.icon}
              onPress={() => navigation.navigate('Home')}>
              <Icons name={'home'} size={30} color="#353336" />
              <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => showMode('time')}>
              <Icons name={'clock-time-four'} size={30} color="#353336" />
              <Text style={styles.text}>choose a time</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => showMode('date')}>
              <Icons name={'calendar-month'} size={30} color="#353336" />
              <Text style={styles.text}>choose a date</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View>
        {show && (
          <RNDateTimePicker
            value={new Date()}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};
export default BottomSheetReminder;
const styles = StyleSheet.create({
  Container: {
    flex: FLEX.FLEX,
    justifyContent: JUSTIFYCONTENT.CENTER,
    padding: PADDING.BS_REMINDER,
    marginTop: MARGINTOP.BS_REMINDER,
  },
  background: {
    backgroundColor: COLOR.TOPBAR_BACKGROUND,
    flex: FLEX.HALF,
    padding: PADDING.BS_BACKGROUND,
    borderRadius: BORDERRADIUS.BS_BACKGROUND,
  },
  icon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginLeft: MARGINLIFT.MODAL_LEFT,
    margin: MAGIN.HALF,
  },
  lebel: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.MIDDLE,
    marginLeft: MARGINLIFT.MODAL_LEFT,
  },
  text: {
    fontSize: FONTSIZE.DRAWER_TEXT,
    color: COLOR.ICON_COLOR,
    marginLeft: MARGINLIFT.DATE_TIME,
  },
});
