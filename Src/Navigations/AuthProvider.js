import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            const userInfo = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            setUser(userInfo.user.uid);
          } catch (e) {
            console.log(e);
          }
        },
        googleLogin: async () => {
          try {
            await GoogleSignin.hasPlayServices({
              showPlayServicesUpdateDialog: true,
            });
            const {idToken} = await GoogleSignin.signIn();
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
            console.log(googleCredential, idToken);
          } catch (error) {
            console.log({error});
          }
        },
        facebookLogin: async () => {
          try {
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);
            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }
            const data = await AccessToken.getCurrentAccessToken();
            if (!data) {
              throw 'Something went wrong obtaining access token';
            }
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );
            await auth().signInWithCredential(facebookCredential);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (name, email, password) => {
          try {
            const userInfo = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );
            console.log(userInfo.user);
            setUser(userInfo.user.uid);
            await firestore()
              .collection('userDetails')
              .doc(userInfo.user.uid)
              .set({name: name, email: email});
          } catch (e) {
            console.log(e);
          }
        },
        forgetPassword: email => {
          auth()
            .sendPasswordResetEmail(email)
            .then(() => {
              alert('email send');
            })
            .catch(e => {
              alert(e);
            });
        },

        logout: async () => {
          try {
            await auth().signOut();
            setUser(false);
          } catch (e) {
            console.log(e);
          }
        },
        fetchUser: async uid => {
          try {
            const array = await firestore()
              .collection('userDetails')
              .doc(uid)
              .get()
              .then(data => {
                const detail = data.data();
                return detail;
              });
            return array;
          } catch (e) {
            console.log(e);
          }
        },
        updateUser: async (uid, image) => {
          try {
            await firestore()
              .collection('userDetails')
              .doc(uid)
              .update({profilePicture: image});
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
