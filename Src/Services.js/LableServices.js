import firestore from '@react-native-firebase/firestore';

const database = firestore().collection('userDetails');

export const AddLabels = async (label, userId) => {
  try {
    await database.doc(userId).collection('LabelData').add({
      label: label,
    });
    console.log('Label created.............');
  } catch (error) {
    console.log(error);
  }
};
