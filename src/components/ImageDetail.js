import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

// const ComponentsScreen = function() {}
const ImageDetails = (props) => {

    return (
        <View>
            <Image
                source={props.imageSource}
            />
            <Text style={styles.textStyle}>
                {props.title}
            </Text>
            <Text>
                Image score - {props.score}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
    },
    textStyleSmall:{
        fontSize: 20
    }
})

export default ImageDetails;