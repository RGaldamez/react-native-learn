import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;
const ColorManagerScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // console.log(red);
  // console.log(green);
  // console.log(blue);
  const setColor = (color, increment) => {
    switch (color) {
      case 'red':
        red + increment > 255 || red + increment < 0
          ? null
          : setRed(red + increment);
        return;
      case 'green':
        green + increment > 255 || green + increment < 0
          ? null
          : setGreen(green + increment);
        return;
      case 'blue':
        blue + increment > 255 || blue + increment < 0
          ? null
          : setBlue(blue + increment);
        return;
      default:
        return;
    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};
// const setRgb = () => {
//   return `rgb(${red},${green},${blue})`;
// };

const styles = StyleSheet.create({});

export default ColorManagerScreen;
