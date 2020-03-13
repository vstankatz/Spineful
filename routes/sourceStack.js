import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Sources from '../screens/sources';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Sources: {
        screen: Sources,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Sources" />
            };
        }
    }
};

const SourceStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerBackTitle: 'Back',
        headerBackTitleStyle: {
            fontSize: 14,
            color: 'white'
        },
        headerStyle: {
            backgroundColor: "rgba(252,70,107,1)",
            height: 60,
        },
        headerTintColor: 'white'
    }
});

export default createAppContainer(SourceStack)