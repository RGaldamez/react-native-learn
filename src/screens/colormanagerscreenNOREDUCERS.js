import React, { useReducer } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;
const reducer = (state, action ) => {
  // dont edit the state directly state.red = state.red +1
  //state => {red,blue,green}
  //action => {colorToChange, amount}
  switch(action.colorToChange){
    case 'red':
      return {...state, red: state.red + action.amount};
    case 'green':
      return {...state, green: state.green + action.amount};
    case 'blue':
      return {...state, blue: state.blue + action.amount};
    default:
      return state;
  }
};
const ColorManagerScreen = () => {
  
  
  const [state, dispatch] = useReducer(reducer. {red:0,green:0,blue:0});
  const {red,green,blue} = state;

  // console.log(red);
  // console.log(green);
  // console.log(blue);
  
  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({colorToChange:'red',amount:COLOR_INCREMENT})}
        onDecrease={() => dispatch({colorToChange:'red',amount:-1*COLOR_INCREMENT})}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({colorToChange:'green',amount:COLOR_INCREMENT})}
        onDecrease={() => dispatch({colorToChange:'green',amount:-1*COLOR_INCREMENT})}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({colorToChange:'blue',amount:COLOR_INCREMENT})}
        onDecrease={() => dispatch({colorToChange:'blue',amount:-1*COLOR_INCREMENT})}
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
