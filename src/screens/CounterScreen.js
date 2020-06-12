import React, {useReducer} from 'react';
import {View, Button, Text, TouchableOpacity, StyleSheet} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase_counter':
      return {...state, counter: state.counter + action.payload};
    case 'decrease_counter':
      return {...state, counter: state.counter + action.payload};
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  const {counter} = state;

  return (
    <View style={styles.layout}>
      <View style={styles.counterStyle}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      <TouchableOpacity
        style={styles.increaseButton}
        onPress={() => {
          dispatch({type: 'increase_counter', payload: 1});
        }}>
        <Text style={styles.buttonText}> + </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.decreaseButton}
        onPress={() => {
          dispatch({type: 'decrease_counter', payload: -1});
        }}>
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    borderWidth: 1,
    borderColor: 'black',
    height: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  increaseButton: {
    backgroundColor: 'gray',
    flex: 3,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  decreaseButton: {
    backgroundColor: 'gray',
    flex: 2,
    borderWidth: 1,
    borderColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterStyle: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
  },
  counterText: {
    fontSize: 40,
  },
});

export default CounterScreen;
