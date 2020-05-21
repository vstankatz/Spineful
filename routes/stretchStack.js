import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Pain from "../screens/painManagement";
import Stretch from "../screens/stretches";
import Header from "../shared/header";
import React from "react";

const screens = {
  WheresPain: {
    screen: Pain,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Stretches" />,
      };
    },
  },
  HeresStretch: {
    screen: Stretch,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Stretch" />,
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
    headerTintColor: "#F4F7FF",
  },
});

export default createAppContainer(HomeStack);
