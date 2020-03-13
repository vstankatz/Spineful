import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Sources({ navigation }) {




    return (
        <View >
            <View style={globalStyles.container}>
                <Text style={globalStyles.paragraph}>The data used to inform users is based on the research of Dr Kenneth K. Hansraj for the Assessment of Streeses in the Cervical Spine Caused by Posture and Position of the Head. Here you can see a visual portion of his data which shows the weight placed on the spine at the given angles:</Text>
                </View>
                <Image
                style={styles.image}
                source={require('../assets/images/spine.png')}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250}
});