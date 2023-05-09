import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// const ComponentsScreen = function() {}
const ComponentsScreen = () => {

    const name = 'Anubhab'
    return (
        <View>
            <Text style={styles.textStyle}>
                Getting started with React Native!
            </Text>
            <Text style={styles.textStyleSmall}>
                My name is {name}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    textStyleSmall:{
        fontSize: 20
    }
})

export default ComponentsScreen;