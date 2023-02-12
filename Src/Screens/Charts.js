import React, {useEffect, useState, useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {AuthContext} from '../Navigations/AuthProvider';
import {fetchingNote} from '../Services/NoteServices';
import {Dimensions} from 'react-native';
import {COLOR, FONTSIZE} from '../Utility/Theme';

const Charts = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [pinData, setPinData] = useState([]);
  const [noteData, setNoteData] = useState([]);
  const [archiveData, setArchiveData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);

  const screenWidth = Dimensions.get('window').width;

  const array = [
    {
      name: 'Pinned Notes',
      total_note_data: pinData.length,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'others Notes',
      total_note_data: noteData.length,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Archive Notes',
      total_note_data: archiveData.length,
      color: '#e26a00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Delete Notes',
      total_note_data: deleteData.length,
      color: '#fb8c00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  const getData = async () => {
    const data = await fetchingNote(user.uid);
    let pin = [];
    let other = [];
    let archive = [];
    let deleteData = [];

    data.forEach(item => {
      if (item.pinData && !item.archiveData && !item.deleteData) {
        pin.push(item);
      }
      if (!item.pinData && !item.archiveData && !item.deleteData) {
        other.push(item);
      }
      if (!item.pinData && !item.archiveData && !item.deleteData) {
        archive.push(item);
      }
      if (!item.pinData && !item.archiveData && !item.deleteData) {
        deleteData.push(item);
      }
    });
    setNoteData(other);
    setPinData(pin);
    setArchiveData(archive);
    setDeleteData(deleteData);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Notes Chart</Text>

      <PieChart
        data={array}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={'total_note_data'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        center={[10, 20]}
        absolute
      />
    </View>
  );
};

export default Charts;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  txt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: FONTSIZE.DRAWER_TEXT,
    color: 'rgba(131, 167, 234, 1)',
  },
});
