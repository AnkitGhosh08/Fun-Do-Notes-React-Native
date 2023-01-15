import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Checkbox} from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../Navigations/AuthProvider';
import {fetchingLabel} from '../Services/LableServices';
import {useSelector, useDispatch} from 'react-redux';

const LabelCheck = ({data, onCheck, ifCheck}) => {
  // console.log(data, '2333333333');
  return (
    <View style={{flexDirection: 'row', margin: 10}}>
      <Icons name={'label-outline'} size={30} color="#a507e3" />
      <Text style={styles.text}>{data.label}</Text>
      <View style={styles.Checkbox}>
        <Checkbox
          onPress={() => onCheck(data)}
          status={ifCheck(data) ? 'checked' : 'unchecked'}
        />
      </View>
    </View>
  );
};

const AddLabel = ({navigation}) => {
  const [selectedLabel, setSelectedLabel] = useState([]);

  const dispatch = useDispatch();
  const newLabel = useSelector(state => state.newLabel);

  const {user} = useContext(AuthContext);

  const getData = async () => {
    const output = await fetchingLabel(user.uid);
    dispatch({type: 'LABELDATA', payload: output});
  };

  // const [products, setProducts] = useState([]);

  // const handleChange = id => {
  //   let temp = products.map(product => {
  //     console.log(products, '1111');
  //     if (id === product.id) {
  //       return {...product, isChecked: !product.isChecked};
  //     }
  //     return product;
  //   });
  //   setProducts(temp);
  // };
  //let selected = products.filter(product => product.isChecked);

  const onCheck = item => {
    const index = selectedLabel.indexOf(item);
    if (index === -1) {
      setSelectedLabel(prev => [...prev, item]);
    } else {
      const selected = [...selectedLabel];
      selected.splice(index, 1);
      setSelectedLabel(selected);
    }
  };

  const ifCheck = dataStr => {
    return selectedLabel.includes(dataStr);
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.navigate('AddNotes', {labelData: selectedLabel});
          }}>
          <Ionicons name="arrow-back-outline" size={30} color="#353336" />
        </TouchableOpacity>
        <TextInput
          style={{marginLeft: 20, fontSize: 18}}
          placeholder="Enter Label name"
        />
      </View>

      {newLabel.map(itm => (
        <LabelCheck
          data={itm}
          onCheck={onCheck}
          ifCheck={ifCheck}
          key={itm.labelId}
        />
      ))}
    </View>
  );
};
export default AddLabel;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    // backgroundColor: '#dac5e6',
    padding: 5,
  },
  icon: {
    margin: 10,
  },
  labelIcon: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    color: 'black',
  },
  Checkbox: {
    marginLeft: 250,
    color: '#dac5e6',
  },
});
