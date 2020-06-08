import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ExerciseComponent = () => {
  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with React Native!</Text>
      <Text style={styles.paragraphStyle}>My name is Ricardo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  paragraphStyle: {
    fontSize: 20,
  },
});

export default ExerciseComponent;
