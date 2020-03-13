import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import { globalStyles } from '../styles/global';


export default function PainMagagement({ navigation }) {


    const [stretches, setStretches] = useState([
        {key: 1, title: 'Vertical Head Tilt', contents: ['Begin with your head over your shoulders and your back straight*', 'Lower your chin towards your chest and hold for 15-30 seconds where still comfortable. Slowly lift your head back to the starting position', 'Tilt your chin updwards, leaning your skull towards the back of your neck. Hold again before returning your head to the start position.', 'Repeat at least three times, try to do this excercise several times throughout your day if your work contributes to the pain.'], footer: '*if you are unable to sit up straight please seek medical attention, they can instruct you on what to do and how to modify these stretches if approved.', position: ['Sitting', 'Standing']},
        { key: 2, title: 'Side Head Tilt', contents: ['Begin with your head over your shoulders and your back straight*', 'Sowly titlt your head towards your right shoulder. Keep your shoulder down and move until you feel a stretch. Hold for 5-10 seconds before lifting your head back to the start position', 'Repeat the last step on your left side.', 'You can repeat the stretch on both sides up to 10 times.'], footer: '*if you are unable to sit or stand up straight please seek medical attention, they can instruct you on what to do and how to modify these stretches if approved.', position: ['Standing']},
        { key: 3, title: 'Side Rotation', contents: ['Begin with your head over your shoulders and your back straight*', 'Sowly turn your head to the right. Keep your shoulder down and move until you feel a stretch until you feel a stretch in your neck and shoulder. Hold for 15-30 seconds before turning your head back to the start position', 'Repeat the on your left side.', 'You can repeat the stretch on both sides up to 10 times.'], footer: '*if you are unable to sit or stand up straight please seek medical attention, they can instruct you on what to do and how to modify these stretches if approved.', position: ['Sitting', 'Standing'] },
        { key: 4, title: 'Shoulder Roll', contents: ['Begin with your head over your shoulders and your back straight*', 'Raise your shoulders straight up towards your ears then move them in a circle, going forward. Do at least 6 times before returning to the start position.','Raise your shoulders straight up towards your ears and them move them in a backwards circle at least 6 times.'], footer: '*if you are unable to sit or stand up straight please seek medical attention, they can instruct you on what to do and how to modify these stretches if approved.', position: ['Standing'] },
    ]);



    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.paragraph}>The main thing to keep in mind when dealing with neck pain is that<Text style={styles.bold}> less is more.</Text> Any excercise or stretch should be done into slowly and never to a point you experience more pain. If pain persists or prevents you from moving please <Text style={styles.bold}>consult a medical professional at once</Text>.</Text>
            <Text style={styles.title}>Low Impact Stretches</Text>
            <FlatList
                data={stretches}
                scrollEnabled={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("HeresStretch", item)}
                    >
                        <Text style={styles.list}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
        color: 'black'
    },
    list: {
        padding: 10,
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'groovy',
        color: 'purple'
 
    },
    title: {
        fontFamily: 'groovy',
        fontSize: 20,
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: 'dimgrey'
    }
})