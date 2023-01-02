import React, {useState, useContext} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../Navigations/AuthProvider';
import {AddLabels} from '../Services.js/LableServices';

const AddLabel = ({navigation}) => {
  const [label, setLabel] = useState();

  const {user} = useContext(AuthContext);

  const onBackPress = async () => {
    let userId = user.uid;
    await AddLabels(label, userId);
    navigation.navigate('AddNotes');
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon} onPress={() => onBackPress()}>
          <Ionicons name="arrow-back-outline" size={30} color="#353336" />
        </TouchableOpacity>
        <TextInput
          style={{marginLeft: 20, fontSize: 18}}
          placeholder="Enter Label name"
          value={label}
          onChangeText={value => setLabel(value)}
        />
      </View>
    </View>
  );
};
export default AddLabel;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#dac5e6',
    padding: 5,
  },
  icon: {
    margin: 10,
  },
});
