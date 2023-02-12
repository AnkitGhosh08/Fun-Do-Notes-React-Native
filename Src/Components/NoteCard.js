import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';
import {
  ALIGNCONTENT,
  BORDERRADIUS,
  BORDERWIDTH,
  COLOR,
  FLEXDIRECTION,
  FONTSIZE,
  FONTWEIGHT,
  JUSTIFYCONTENT,
  MAGIN,
  MARGINBOTTON,
  MARGINLIFT,
  MARGINRIGHT,
  MARGINTOP,
  PADDINGBOTTOM,
  PADDINGHORIZONTAL,
  PADDINGTOP,
} from '../Utility/Theme';

const NoteCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.note}>
        <Text style={styles.note}>{props.note}</Text>
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
    margin: MAGIN.HALF,
    borderColor: COLOR.TOPBAR_BACKGROUND,
    borderWidth: BORDERWIDTH.NOTE_CARD,
    paddingTop: PADDINGTOP.NOTE_CARD,
    marginLeft: MARGINLIFT.DRAWER_LEFT,
    marginRight: MARGINRIGHT.NOTE_CARD,
    marginTop: MARGINTOP.NOTE_CARD,
    paddingHorizontal: PADDINGHORIZONTAL.NOTE_CARD,
  },
  title: {
    marginTop: MARGINTOP.NOTE_CARD_TITLE,
    marginBottom: MARGINBOTTON.NOTE_CARD_TITLE,
    paddingBottom: PADDINGBOTTOM.NOTE_CARD,
  },
  note: {
    bottom: PADDINGBOTTOM.NOTE_CARD,
  },
  chipText: {
    borderRadius: BORDERRADIUS.NOTE_CARD,
    color: COLOR.APP_BACKGROUND,
    backgroundColor: COLOR.CHIP_CARD,
    margin: MAGIN.NOTE_CARD,
  },
  chipStyle: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    justifyContent: JUSTIFYCONTENT.CONTENT,
    alignItems: ALIGNCONTENT.CENTER,
  },
  title: {
    fontWeight: FONTWEIGHT.WEIGHT,
    fontSize: FONTSIZE.DRAWER_TEXT,
  },
  note: {
    fontSize: FONTSIZE.NOTE_TEXT,
  },
});
