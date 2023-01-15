import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';

const NoteCard = props => {
  // console.log(props.labelData, '0000000');

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{props.title}</Text>
      </View>
      <View style={styles.note}>
        <Text style={{fontSize: 15}}>{props.note}</Text>
      </View>
      <View style={styles.chipStyle}>
        {props.labelData?.map(labels => (
          <Chip style={styles.chipText} key={labels.labelId}>
            {labels.label}
          </Chip>
        ))}
      </View>

      {/* {noteData.map(item => (
                    <TouchableOpacity key={item.id} onPress={() => { goToUpdateNote({ item }) }}>
                        <NoteCard {...item} />
                    </TouchableOpacity>
                ))} */}
    </View>
  );
};
export default NoteCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    margin: 10,
    // backgroundColor: 'white',
    // borderBottomColor:'#d478f0',
    borderColor: '#dac5e6',
    borderWidth: 3,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  title: {
    marginTop: 3,
    marginBottom: 9,
    paddingBottom: 7,
  },
  note: {
    bottom: 10,
  },
  chipText: {
    borderRadius: 15,
    //borderBottomRightRadius: 30,
    //borderTopRightRadius: 30,
    color: 'white',
    backgroundColor: '#caa0e8',
    margin: 5,
  },
  chipStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
