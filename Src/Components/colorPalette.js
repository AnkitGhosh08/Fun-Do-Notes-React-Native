import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';

const ColorPalette = ({color, setColor}) => {
  const [backgroundColor, setBackgroundcolor] = React.useState('white');
  const colors = [
    '#ffff',
    '#7fffd4',
    '#d2691e',
    '#008b8b',
    '#696969',
    '#adff2f',
    '#c71585',
  ];
  const Change = color => {
    setBackgroundcolor(color);
  };
  return (
    <View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={color}
        onRequestClose={() => {
          setColor(false);
        }}>
        <View style={styles.Container}>
          <View style={styles.background}>
            <View
              style={[styles.container, {backgroundColor: backgroundColor}]}>
              <ScrollView horizontal={true}>
                {colors.map(color => (
                  <TouchableOpacity
                    style={[styles.color, {backgroundColor: color}]}
                    onPress={() => {
                      Change(color);
                    }}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ColorPalette;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  color: {
    width: 50,
    height: 50,
    borderRadius: 30,
    margin: 10,
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
    marginTop: 50,
  },
  background: {
    backgroundColor: '#dac5e6',
    flex: 0.5,
    padding: 40,
    borderRadius: 10,
  },
});
