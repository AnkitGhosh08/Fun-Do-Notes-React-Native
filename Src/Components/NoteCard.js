import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';
import {
  ALIGNCONTENT,
  BORDERRADIUS,
  COLOR,
  FLEXDIRECTION,
  JUSTIFYCONTENT,
} from '../Utility.js/Theme';

const NoteCard = props => {
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
    borderRadius: BORDERRADIUS.BORDER_RADIUS,
    margin: 10,
    borderColor: COLOR.TOPBAR_BACKGROUND,
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
    color: COLOR.APP_BACKGROUND,
    backgroundColor: '#caa0e8',
    margin: 5,
  },
  chipStyle: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    justifyContent: JUSTIFYCONTENT.CONTENT,
    alignItems: ALIGNCONTENT.CENTER,
  },
});
