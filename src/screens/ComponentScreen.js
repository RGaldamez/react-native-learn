import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () =>  {
    const greeting = 'Hello there'
    const greeting2 = <Text>Hello there again</Text>;
    return (
    <View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        <Text>{greeting}</Text>
        {greeting2}
        
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 30
    }
});


export default ComponentScreen;