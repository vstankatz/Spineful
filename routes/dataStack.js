import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Data from '../screens/data';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Data: {
        screen: Data,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Data" />
            };
        }
    }
};

const DataStack = createStackNavigator(screens, {
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

export default createAppContainer(DataStack)