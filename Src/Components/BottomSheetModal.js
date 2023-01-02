import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomSheetModal = ({navigation, modal, setModal}) => {
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
              <Icons name={'delete'} size={30} color="black" />
              <Text style={{fontSize: 20, color: 'black'}}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.lebel}
              onPress={() => navigation.navigate('AddLabel')}>
              <Icons name={'label-outline'} size={30} color="black" />
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                }}>
                Labels
              </Text>
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
    justifyContent: 'center',
    padding: 60,
    //margin: 350,
  },
  background: {
    backgroundColor: '#dac5e6',
    flex: 0.5,
    padding: 40,
    borderRadius: 10,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: -20,
  },
  lebel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginLeft: -20,
  },
});
