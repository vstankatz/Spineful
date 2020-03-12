import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Keyboard, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Stretches({ navigation }) {
    const [position, setPostion] = useState({})

    const positionNumber = (navigation.getParam('position').length)
    
    let (navigation.getParam('position').length) = position

    const instructions = ( navigation.getParam("contents")).map(content);
    return (
        <View style={globalStyles.container}>
            <Text>{navigation.getParam("title")}</Text>
            <FlatList 
                data={instructions}
                renderItem={({item}) =>  (
                <Text>{item}</Text>
            )}
            />
            <Text>
        {navigation.getParam("footer")}, ep.{navigation.getParam("season")}
            </Text>
        </View>
    );
}
