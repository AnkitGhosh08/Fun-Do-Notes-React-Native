import firestore from '@react-native-firebase/firestore';

const database = firestore().collection('userDetails');

export const addLabels = async (label, userId) => {
  try {
    await database.doc(userId).collection('LabelData').add({
      label: label,
    });
    //  console.log('Label created.............');
  } catch (error) {
    console.log(error);
  }
};

export const fetchingLabel = async userId => {
  try {
    let array = [];
    await database
      .doc(userId)
      .collection('LabelData')
      .get()
      .then(data => {
        data.forEach(label => {
          // console.log('label data return.......');
          const docData = label.data();
          docData.labelId = label.id;
          array.push(docData);
        });
      });
    return array;
  } catch (error) {
    console.log(error);
  }
};
export const deleteLabel = async (labelId, userId) => {
  try {
    await database
      .doc(userId)
      .collection('LabelData')
      .doc(labelId)
      .delete()
      .then(() => {
        console.log('deleted....');
      });
  } catch (error) {
    console.log(error);
  }
};

export const updateLabel = async (label, labelId, userId) => {
  try {
    await database
      .doc(userId)
      .collection('LabelData')
      .doc(labelId)
      .update({
        label: label,
      })
      .then(() => {
        console.log('your label updated......');
      });
  } catch (error) {
    console.log(error);
  }
};
