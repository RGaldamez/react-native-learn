import React, {useReducer} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;
const reducer = (state, action) => {
  // dont edit the state directly state.red = state.red +1
  //state => {red,blue,green}
  //action => {type, payload} used with normal convention
  switch (action.type) {
    case 'increase_red':
      return state.red + action.payload > 255
        ? state
        : {...state, red: state.red + action.payload};
    case 'decrease_red':
      return state.red - action.payload < 0
        ? state
        : {...state, red: state.red - action.payload};
    case 'increase_green':
      return state.green + action.payload > 255
        ? state
        : {...state, green: state.green + action.payload};
    case 'decrease_green':
      return state.green - action.payload < 0
        ? state
        : {...state, green: state.green - action.payload};
    case 'increase_blue':
      return state.blue + action.payload > 255
        ? state
        : {...state, blue: state.blue + action.payload};
    case 'decrease_blue':
      return state.blue - action.payload < 0
        ? state
        : {...state, blue: state.blue - action.payload};
    default:
      return state;
  }
};
const ColorManagerScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;

  // console.log(red);
  // console.log(green);
  // console.log(blue);

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({type: 'increase_red', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({type: 'decrease_red', payload: COLOR_INCREMENT})
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({type: 'increase_green', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({type: 'decrease_green', payload: COLOR_INCREMENT})
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({type: 'increase_blue', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({type: 'decrease_blue', payload: COLOR_INCREMENT})
        }
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
