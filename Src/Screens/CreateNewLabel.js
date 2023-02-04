import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../Navigations/AuthProvider';
import {addLabels, fetchingLabel, deleteLabel} from '../Services/LableServices';
import LabelCard from '../Components/LabelCard';
import {useSelector, useDispatch} from 'react-redux';
import {FLEXDIRECTION, MAGIN, PADDING, WIDTH} from '../Utility.js/Theme';

const CreateNewLabel = ({navigation}) => {
  const [label, setLabel] = useState();
  const [close, setClose] = useState(false);

  const dispatch = useDispatch();
  const newLabel = useSelector(state => state.newLabel);

  const {user} = useContext(AuthContext);
  let userId = user.uid;

  const getData = async () => {
    const output = await fetchingLabel(user.uid);
    dispatch({type: 'LABELDATA', payload: output});
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);

  const onSavePress = async () => {
    await addLabels(label, userId);
    await getData();
    setLabel('');
  };

  const onDeletePress = async (labelId, userId) => {
    await deleteLabel(labelId, userId);
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} />
        </TouchableOpacity>
        <Text style={styles.text}>Edit labels</Text>
      </View>

      <View
        style={[
          styles.inputindex,
          {borderColor: close ? '#7a43ab' : 'ghostwhite'},
        ]}>
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => {
            setClose(!close);
          }}>
          <Icons name={close ? 'close' : 'plus'} size={30} color="#7a43ab" />
        </TouchableOpacity>
        <TextInput
          style={{
            fontSize: 20,
            color: '#353336',
          }}
          placeholder="create your label"
          value={label}
          onChangeText={value => setLabel(value)}
        />

        <View style={styles.checkmark}>
          <TouchableOpacity onPress={() => onSavePress()}>
            {close && <Ionicons name={'checkmark'} size={30} color="#7a43ab" />}
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={newLabel}
        keyExtractor={item => item.labelId}
        key={item => item.labelId}
        renderItem={({item}) => (
          <TouchableOpacity>
            <LabelCard
              handelDelete={() => {
                onDeletePress(item.labelId, userId);
                getData();
              }}
              {...item}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default CreateNewLabel;
const styles = StyleSheet.create({
  container: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    height: 60,
    padding: PADDING.LOGIN_TEXT,
  },
  icon: {
    margin: MAGIN.HALF,
  },
  text: {
    margin: MAGIN.HALF,
    fontSize: 20,
  },
  inputindex: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    borderWidth: 1,
    width: WIDTH.FULL,
  },
  checkmark: {
    marginLeft: 170,
    margin: MAGIN.HALF,
  },
});
