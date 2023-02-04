import React, {useState, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Avatar} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../Navigations/AuthProvider';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import {
  ALIGNITEMS,
  BORDERRADIUS,
  COLOR,
  FLEXDIRECTION,
  HIGHT,
  JUSTIFYCONTENT,
  PADDING,
  WIDTH,
} from '../Utility.js/Theme';

const TopBar = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({});
  const [viewModal, setViewModal] = useState(false);
  const [imageData, setImageData] = useState('');

  const {logout, user, fetchUser, updateUser} = useContext(AuthContext);

  const toggle = useSelector(state => state.toggle);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [imageData]);

  const getData = async () => {
    const userdetails = await fetchUser(user.uid);
    setUserData(userdetails);
  };

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
        <Avatar.Image
          size={30}
          source={
            imageData
              ? {uri: userData.profilePicture}
              : require('../assets/Avatar2.png')
          }
        />
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
                    source={
                      imageData
                        ? {uri: userData.profilePicture}
                        : require('../assets/Avatar2.png')
                    }
                  />
                </TouchableOpacity>
              </View>
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
    flexDirection: FLEXDIRECTION.DIRECTION,
    height: HIGHT.INPUTTEXT,
    backgroundColor: COLOR.TOPBAR_BACKGROUND,
    width: WIDTH.FULL,
    borderRadius: BORDERRADIUS.TOPBAR_RADIUS,
    justifyContent: JUSTIFYCONTENT.AROUND,
    padding: PADDING.TEXTINPUT,
  },
  barIcon: {
    marginRight: -5,
    marginLeft: 10,
  },
  userIcon: {
    justifyContent: JUSTIFYCONTENT.BETWEEN,
    marginLeft: 15,
  },
  grid: {
    justifyContent: JUSTIFYCONTENT.AROUND,
    marginLeft: 30,
  },
  SearchText: {
    justifyContent: JUSTIFYCONTENT.CENTER,
    fontSize: 18,
    marginLeft: 50,
  },
  HeadTitle: {
    width: WIDTH.MODAL_WIDHT,
    height: WIDTH.MODAL_WIDHT,
    backgroundColor: COLOR.APP_BACKGROUND,
    borderWidth: 2,
    borderRadius: 20,
  },
  centered_view: {
    flex: 1,
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignItems: ALIGNITEMS.ITEM,
    backgroundColor: '#00000099',
  },
  modal: {
    width: WIDTH.MODAL_WIDHT,
    height: WIDTH.MODAL_WIDHT,
    backgroundColor: COLOR.MODAL_BACKGROUND,
    borderWidth: 1,
    borderRadius: 20,
  },
  title: {
    height: 50,
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignItems: ALIGNITEMS.ITEM,
    backgroundColor: COLOR.MODAL_HEAD,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  body: {
    height: 200,
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignItems: ALIGNITEMS.ITEM,
  },
  button: {
    backgroundColor: COLOR.BUTTON_BACKGROUND,
    height: 40,
    width: 85,
    borderRadius: 20,
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignSelf: ALIGNITEMS.ITEM,
    marginTop: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  modalIcon: {
    marginTop: 20,
    marginLeft: 15,
    flexDirection: FLEXDIRECTION.DIRECTION,
    justifyContent: 'space-evenly',
  },
});
