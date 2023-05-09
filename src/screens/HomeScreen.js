import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";

const HomeScreen = ({navigation}) => {
  console.log("Homescreen props", navigation.actions)
  return <View>
    <Text style={styles.text}>
      HomeScreen
    </Text>
    <Button 
      title="Go to Components Demo"
      onPress={() => {
        navigation.navigate('Components')
      }}
    />

    <Button 
      title="Go to List Demo"
      onPress={() => {
        navigation.navigate('List')
      }}
    />

    <Button 
      title="Go to Image Demo"
      onPress={() => {
        navigation.navigate('Image')
      }}
    />
  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
