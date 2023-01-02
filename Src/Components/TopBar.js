import React, {useState, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Avatar} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../Navigations/AuthProvider';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';

const TopBar = () => {
  const navigation = useNavigation();

  //const [toggle, setToggle] = useState(false);
  const [userData, setUserData] = useState({});
  const [viewModal, setViewModal] = useState(false);
  const [imageData, setImageData] = useState('');

  const {logout, user, fetchUser, updateUser} = useContext(AuthContext);
  //console.log('111111111', user.uid)

  const toggle = useSelector(state => state.toggle);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [imageData]);

  const getData = async () => {
    const userdetails = await fetchUser(user.uid);
    setUserData(userdetails);
  };

  //console.log('checking...', userData.profilePicture)

  const choosePictureFromLibrary = () => {
    ImagePicker.openPicker({
      width: 50,
      height: 50,
      cropping: true,
    }).then(image => {
      console.log(image);
      updateUser(user.uid, image.path);
      setImageData(image.path);
    });
  };
  const clickPicture = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.barIcon}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <FontAwesome name={'bars'} size={25} color={'#d259f7'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SearchBar')}>
        <Text style={styles.SearchText}>Search your Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.grid}
        onPress={() => dispatch({type: 'TOGGLE'})}>
        <Icons
          name={toggle ? 'view-agenda-outline' : 'view-grid-outline'}
          size={25}
          color={'#d259f7'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.userIcon}
        onPress={() => setViewModal(true)}>
        <Avatar.Image size={30} source={{uri: userData.profilePicture}} />
      </TouchableOpacity>
      <View>
        <Modal
          visible={viewModal}
          transparent
          onRequestClose={() => setViewModal(false)}
          animationType="fade"
          hardwareAccelerated>
          <View style={styles.centered_view}>
            <View style={styles.modal}>
              <View style={styles.title}>
                <Text style={styles.text}>Fun-Do-Notes</Text>
              </View>

              <View style={styles.modalIcon}>
                <TouchableOpacity
                  onPress={() => {
                    choosePictureFromLibrary();
                  }}>
                  <Avatar.Image
                    size={70}
                    source={{uri: userData.profilePicture}}
                  />
                </TouchableOpacity>
              </View>
              <Text style={{fontSize: 23, textAlign: 'center'}}>
                {userData.name}
              </Text>
              <TouchableOpacity onPress={() => logout()} style={styles.button}>
                <Text style={styles.text}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
export default TopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 45,
    backgroundColor: '#dac5e6',
    width: '100%',
    borderRadius: 30,
    justifyContent: 'space-around',
    padding: 10,
  },
  barIcon: {
    marginRight: -5,
    marginLeft: 10,
  },
  userIcon: {
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  grid: {
    justifyContent: 'space-around',
    marginLeft: 30,
  },
  SearchText: {
    justifyContent: 'center',
    fontSize: 18,
    marginLeft: 50,
  },
  HeadTitle: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 20,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  modal: {
    width: 300,
    height: 300,
    backgroundColor: '#dac5e6',
    borderWidth: 1,
    borderRadius: 20,
  },
  title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddb0f5',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#d259f7',
    height: 40,
    width: 85,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  modalIcon: {
    marginTop: 20,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
