import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Keyboard, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Stretches({ navigation }) {
    const positionNumber = (navigation.getParam('position').length)
    const [position, setPostion] = useState({positionNumber})
    
    
    
    const instructions = ( navigation.getParam('contents'))
    // .map(contnt);
    return (
        <View style={globalStyles.container}>
            <View style={styles.textBox}>
                <Text style={styles.title}>{navigation.getParam("title")}</Text>
            </View>
            <FlatList 
                data={instructions}
                scrollEnabled={false}
                renderItem={({ item, index }) => (
                
                <Text style={styles.list}>{index+1}. {item}</Text>
            )}
            />
            <Text style={styles.footer}>
            {navigation.getParam("footer")}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        padding:10,
        fontSize:15
    },
    title: {
        fontFamily: 'groovy',
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        color: 'purple'

    },
    footer: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 10
    }
})