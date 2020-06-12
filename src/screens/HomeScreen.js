import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          navigation.navigate('Component');
        }}
      />
      <Button
        title="Go to Lists Demo"
        onPress={() => {
          navigation.navigate('List');
        }}
      />
      <Button
        title="Go to Images Demo"
        onPress={() => {
          navigation.navigate('Image');
        }}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => {
          navigation.navigate('CounterScreen');
        }}
      />
      <Button
        title="Go to Colors Demo"
        onPress={() => {
          navigation.navigate('Colors');
        }}
      />
      <Button
        title="Go to Color Manager Demo"
        onPress={() => {
          navigation.navigate('ColorManager');
        }}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => {
          navigation.navigate('Text');
        }}
      />
      <Button
        title="Go to Box Object Model Demo"
        onPress={() => {
          navigation.navigate('Box');
        }}
      />
      {/* <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Components');
        }}>
        <Text>Go to Components Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('List');
        }}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
