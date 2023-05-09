import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetails from '../components/ImageDetail';

// const ComponentsScreen = function() {}
const ImageScreen = () => {

    return (
        <View>
            <Text style={styles.textStyle}>
                Getting started with React Native!
            </Text>
            <ImageDetails
                title = "Forest"
                imageSource = {require("../../assets/forest.jpg")}
                score = {9}
            />
            <ImageDetails
                title = "Beach"
                imageSource = {require("../../assets/beach.jpg")}
                score = {8}
            />
            <ImageDetails
                title = "Mountain"
                imageSource = {require("../../assets/mountain.jpg")}
                score = {7}
            />
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

export default ImageScreen;