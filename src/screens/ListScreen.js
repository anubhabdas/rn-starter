import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        {name: 'Friend #1', age: 52},
        {name: 'Friend #2', age: 32},
        {name: 'Friend #3', age: 42},
        {name: 'Friend #4', age: 22},
        {name: 'Friend #5', age: 12},
        {name: 'Friend #6', age: 92},
        {name: 'Friend #7', age: 62},
        {name: 'Friend #8', age: 72},
        {name: 'Friend #9', age: 82},
    ]
    return (
        <FlatList 
            data={friends}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => {
                friend.age
            }}
            renderItem={({item, key}) => {
                return(
                    <Text style={styles.textStyle}>
                        Name - {item.name} - Age {item.age}
                    </Text>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    textStyleSmall:{
        fontSize: 20
    }
})

export default ListScreen;