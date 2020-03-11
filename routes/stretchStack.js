import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Pain from '../screens/pain';
import Stretch from '../screens/stretch';
import Header from '../shared/header';
import React from 'react';

const screens = {
    WheresPain: {
        screen: Pain,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Pain" />
            };
        }
    },
    HeresStretch: {
        screen: Stretch,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Stretch" />
            };
        }
    }
};

// This uses stack Nagigation//
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerBackTitle: 'Back',
        headerBackTitleStyle: {
            fontSize: 12
            color:
        },
        headerStyle: {
            backgroundColor: "rgba(252,70,107,1)",
            height: 60
        }
    }
});

export default createAppContainer(HomeStack)