import React from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOR, FLEXDIRECTION, JUSTIFYCONTENT} from '../Utility.js/Theme';

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
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default BottomSheetModal;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: JUSTIFYCONTENT.CENTER,
    padding: 60,
    marginTop: 50,
  },
  background: {
    backgroundColor: COLOR.TOPBAR_BACKGROUND,
    flex: 0.5,
    padding: 40,
    borderRadius: 10,
  },
  icon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginLeft: -20,
  },
  lebel: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: 30,
    marginLeft: -20,
  },
  DeleteText: {
    fontSize: 20,
    color: COLOR.GREY,
    marginLeft: 15,
  },
  LabelText: {
    fontSize: 18,
    color: COLOR.GREY,
    marginLeft: 15,
  },
});
