import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Avatar} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../Navigations/AuthProvider';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import storage from '@react-native-firebase/storage';
import stringsOfLanguages from '../Utility/Localization';

import {
  ALIGNITEMS,
  BORDERRADIUS,
  BORDERWIDTH,
  COLOR,
  FLEX,
  FLEXDIRECTION,
  FONTSIZE,
  HIGHT,
  JUSTIFYCONTENT,
  MARGINLIFT,
  MARGINRIGHT,
  PADDING,
  WIDTH,
} from '../Utility/Theme';

const TopBar = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({});
  const [viewModal, setViewModal] = useState(false);
  const [imageData, setImageData] = useState('');
  const [uploading, setUploading] = useState(false);
  const [urlOfImage, setUrlOfImage] = useState('');
  const {logout, user, fetchUser, updateUser} = useContext(AuthContext);

  const localization = useSelector(state => state.localization);
  const toggle = useSelector(state => state.toggle);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [imageData]);

  const getData = async () => {
    const userdetails = await fetchUser(user.uid);
    setUserData(userdetails);
  };

  const uploadProfile = async image => {
    const uploadUri = image;
    let fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    setUploading(true);
    try {
      await storage().ref(fileName).putFile(uploadUri);
      setUploading(false);
      const url = await storage().ref(fileName).getDownloadURL();
      setUrlOfImage(url);
      Alert.alert(
        'Image Uploaded!',
        'Your image has been uploaded to cloud storage',
      );
    } catch (e) {
      console.log(e);
    }
  };

  const choosePictureFromLibrary = () => {
    ImagePicker.openPicker({
      width: 50,
      height: 50,
      cropping: true,
    }).then(image => {
      uploadProfile(image.path);
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
        <FontAwesome name={'bars'} size={25} color={'#7586f0'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SearchBar')}>
        <Text style={styles.SearchText}>
          {' '}
          {localization
            ? stringsOfLanguages?._props.en.Search_your_Notes
            : stringsOfLanguages?._props.Hindi.Search_your_Notes}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.grid}
        onPress={() => dispatch({type: 'TOGGLE'})}>
        <Icons
          name={toggle ? 'view-agenda-outline' : 'view-grid-outline'}
          size={25}
          color={'#7586f0'}
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
                <Text style={styles.text}>
                  {localization
                    ? stringsOfLanguages?._props.en.FunDoNotes
                    : stringsOfLanguages?._props.Hindi.FunDoNotes}
                </Text>
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
                <Text style={styles.text}>
                  {' '}
                  {localization
                    ? stringsOfLanguages?._props.en.Logout
                    : stringsOfLanguages?._props.Hindi.Logout}
                </Text>
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
    marginRight: MARGINRIGHT.BAR_ICON,
    marginLeft: MARGINLIFT.DRAWER_LEFT,
  },
  userIcon: {
    justifyContent: JUSTIFYCONTENT.BETWEEN,
    marginLeft: MARGINLIFT.DATE_TIME,
  },
  grid: {
    justifyContent: JUSTIFYCONTENT.AROUND,
    marginLeft: MARGINLIFT.GRID,
  },
  SearchText: {
    justifyContent: JUSTIFYCONTENT.CENTER,
    fontSize: FONTSIZE.DRAWER_TEXT,
    marginLeft: MARGINLIFT.BS_REMINDER,
  },
  HeadTitle: {
    width: WIDTH.MODAL_WIDHT,
    height: WIDTH.MODAL_WIDHT,
    backgroundColor: COLOR.APP_BACKGROUND,
    borderWidth: BORDERWIDTH.MODAL,
    borderRadius: BORDERRADIUS.PLUS_ICON,
  },
  centered_view: {
    flex: FLEX.FLEX,
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignItems: ALIGNITEMS.ITEM,
    backgroundColor: COLOR.MODAL_BG,
  },
  modal: {
    width: WIDTH.MODAL_WIDHT,
    height: WIDTH.MODAL_WIDHT,
    backgroundColor: COLOR.MODAL_BACKGROUND,
    borderWidth: BORDERWIDTH.WIDTH_MODAL,
    borderRadius: BORDERRADIUS.PLUS_ICON,
  },
  title: {
    height: HIGHT.BUTTON,
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
    borderRadius: 10,
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignSelf: ALIGNITEMS.ITEM,
    marginTop: 40,
    marginRight: -10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  modalIcon: {
    marginTop: 20,
    marginLeft: 15,
    flexDirection: FLEXDIRECTION.DIRECTION,
    justifyContent: 'space-evenly',
  },
});
