import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../Navigations/AuthProvider';
import {updateLabel} from '../Services/LableServices';
import {
  FLEXDIRECTION,
  FLEXGROW,
  FONTSIZE,
  MAGIN,
  MARGINLIFT,
} from '../Utility/Theme';

const LabelCard = props => {
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(props.label);
  const {user} = useContext(AuthContext);
  const userId = user.uid;

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
    flexDirection: FLEXDIRECTION.DIRECTION,
    margin: MAGIN.LABEL,
  },
  text: {
    fontSize: FONTSIZE.DRAWER_TEXT,
    marginLeft: MARGINLIFT.LEFT,
    flexGrow: FLEXGROW.ONE,
    margin: MAGIN.LABEL_CARD,
  },
});
