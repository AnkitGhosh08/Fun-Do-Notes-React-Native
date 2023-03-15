import React from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  BORDERRADIUS,
  COLOR,
  FLEX,
  FLEXDIRECTION,
  FONTSIZE,
  JUSTIFYCONTENT,
  MARGINLIFT,
  MARGINTOP,
  PADDING,
} from '../Utility/Theme';

const BottomSheetModal = ({navigation, modal, setModal, noteData}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}>
        <View style={styles.Container}>
          <View style={styles.background}>
            <TouchableOpacity style={styles.icon}>
              <Icons name={'delete'} size={30} color="#353336" />
              <Text style={styles.DeleteText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.lebel}
              onPress={() => navigation.navigate('AddLabels', {noteData})}>
              <Icons name={'label-outline'} size={30} color="#353336" />
              <Text style={styles.LabelText}>Labels</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.lebel}
              onPress={() => navigation.navigate('Formula', {noteData})}>
              <Icons name={'math-tan'} size={30} color="#353336" />
              <Text style={styles.LabelText}>Math</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default BottomSheetModal;
const styles = StyleSheet.create({
  Container: {
    flex: FLEX.FLEX,
    justifyContent: JUSTIFYCONTENT.CENTER,
    padding: PADDING.BS_BACKGROUND,
    marginTop: MARGINTOP.BS_BACKGROUND,
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
  },
  lebel: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.MIDDLE,
    marginLeft: MARGINLIFT.MODAL_LEFT,
  },
  DeleteText: {
    fontSize: FONTSIZE.DELETE_TEXT,
    color: COLOR.GREY,
    marginLeft: MARGINLIFT.DATE_TIME,
  },
  LabelText: {
    fontSize: FONTSIZE.DRAWER_TEXT,
    color: COLOR.GREY,
    marginLeft: MARGINLIFT.DATE_TIME,
  },
});
