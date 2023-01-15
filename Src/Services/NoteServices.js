import firestore from '@react-native-firebase/firestore';

const database = firestore().collection('userDetails');

export const addNote = async (
  title,
  note,
  userId,
  pinData,
  archiveData,
  deleteData,
  reminderData,
  labelData,
) => {
  // console.log('firebase.........', userId);
  try {
    await database.doc(userId).collection('NoteData').add({
      title: title,
      note: note,
      pinData: pinData,
      archiveData: archiveData,
      deleteData: deleteData,
      reminderData: reminderData,
      labelData: labelData,
    });
    // console.log('Created data.............');
  } catch (error) {
    console.log(error);
  }
};

export const fetchingNote = async userId => {
  try {
    let array = [];
    await database
      .doc(userId)
      .collection('NoteData')
      .get()
      .then(noteData => {
        noteData.forEach(note => {
          // console.log('return data.......')
          const docData = note.data();
          docData.id = note.id;
          array.push(docData);
        });
      });
    return array;
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (
  title,
  note,
  userId,
  noteId,
  pinData,
  archiveData,
  deleteData,
  reminderData,
  labelData,
) => {
  try {
    await database
      .doc(userId)
      .collection('NoteData')
      .doc(noteId)
      .update({
        title: title,
        note: note,
        pinData: pinData,
        archiveData: archiveData,
        deleteData: deleteData,
        reminderData: reminderData,
        labelData: labelData,
      })
      .then(() => {
        // console.log('your data updated......');
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = async (noteId, userId) => {
  try {
    await database
      .doc(userId)
      .collection('NoteData')
      .doc(noteId)
      .delete()
      .then(() => {
        // console.log('user deleted......');
      });
  } catch (error) {
    console.log(error);
  }
};
