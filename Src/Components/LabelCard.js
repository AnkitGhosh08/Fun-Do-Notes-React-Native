import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../Navigations/AuthProvider';
import {
  fetchingLabel,
  updateLabel,
  deleteLabel,
} from '../Services/LableServices';

const LabelCard = props => {
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(props.label);
  //const [labelData, setLabelData] = useState([]);
  const {user} = useContext(AuthContext);
  const userId = user.uid;
  // console.log(userId);
  //console.log(props, '1111');

  //   const getData = async () => {
  //     const output = await fetchingLabel(user.uid);
  //     setUpdate(output);
  //     //console.log(output);
  //   };

  //   const onDeletePress = async () => {
  //     await deleteLabel(props.labelId, userId);
  //   };

  const onHandelSavePress = async () => {
    await updateLabel(update, props.labelId, userId);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.handelDelete}>
        <Icons
          name={edit ? 'delete' : 'label-outline'}
          size={30}
          color="#7a43ab"
        />
      </TouchableOpacity>
      <TextInput
        style={styles.text}
        value={update}
        onChangeText={text => setUpdate(text)}
      />

      {/* <Text style={styles.text}>{props.label}</Text> */}

      <View style={{justifyContent: 'flex-end'}}></View>
      <TouchableOpacity
        onPress={() => {
          setEdit(!edit);
          onHandelSavePress;
        }}>
        <Icons name={edit ? 'check' : 'pencil'} size={25} color="#7a43ab" />
      </TouchableOpacity>
    </View>
  );
};
export default LabelCard;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 12,
  },
  text: {
    // fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
    flexGrow: 1,
    margin: -10,
  },
});
