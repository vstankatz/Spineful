import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Sources from "../screens/sources";
import Header from "../shared/header";
import React from "react";

const screens = {
  HomeScreen: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Home" />,
      };
    },
  },
  Sources: {
    screen: Sources,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Sources" />,
      };
    },
  },
};

// This uses stack Nagigation//
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#F4F7FF",
    headerBackTitle: "Back",
    headerBackTitleStyle: {
      fontSize: 16,
      color: "#F4F7FF",
    },
    headerStyle: {
      backgroundColor: "rgba(139,172,254,1)",
      height: 60,
    },
  },
});

export default HomeStack;
