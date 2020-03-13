import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Sources from '../screens/sources';
import Header from "../shared/header";
import React from 'react';


const screens = {
    HomeScreen: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Home' />,
            }
        }

    },
    Sources: {
        screen: Sources,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Sources" />
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
            fontSize: 12,
            color: 'white'
        },
        headerStyle: {
            backgroundColor: "rgba(252,70,107,1)",
            height: 60
        }
    }
});

export default HomeStack;
