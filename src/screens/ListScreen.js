import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1', age: '11', key: '1'},
    {name: 'Friend #2', age: '12', key: '2'},
    {name: 'Friend #3', age: '13', key: '3'},
    {name: 'Friend #4', age: '14', key: '4'},
    {name: 'Friend #5', age: '15', key: '5'},
    {name: 'Friend #6', age: '16', key: '6'},
    {name: 'Friend #7', age: '17', key: '7'},
  ];

  return (
    <FlatList
      //keyExtractor method is more efficient, use with _id if the object does not have a key property
      //keyExtractor={friend => friend.name} 2nd method to insert keys into objects, use property withing to set as key
      //horizontal
      //horizontal = {true} --- lists items horizontally, possible navbar?
      //showsHorizontalScrollIndicator={false} --- hides the scrollbar in the bottom when scrolling horizontally
      data={friends}
      renderItem={({item}) => {
        // element === {item: {name: 'Friend #1'}, index:0}
        // item === { name: 'Friend 1}
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
