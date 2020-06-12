import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    //flexbox properties
    // alignItems: 'center', //stretch- default, flex-start, center, flex-end
    // flexDirection: 'column', //column -default,row
    // justifyContent: 'space-between', //flex-start - default, center, flex-end, space-between, space-around
    flexDirection: 'row',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    //child flexbox properties
    flex: 1, //  adds up all the flex from the siblings, this scenario causes this to have 10% of space
    alignSelf: 'center', //overrides alignItems in parent element, flex-end, center, flex-start
    //position
    position: 'relative', // relative-default, absolute to place regardless of siblings
    //top left bottom right, moves units after everything is rendered

    ...StyleSheet.absoluteFillObject,
    // position: 'absolute',
    // top: '0',
    // bottom: '0',
    // right: '0',
    // left: '0',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    //child flexbox properties
    flex: 4, // 40% of space
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    //child flexbox properties
    flex: 5, // 50% of space
  },
});

export default BoxScreen;
