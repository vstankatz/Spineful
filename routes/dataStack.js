import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Data from "../screens/data";
import Header from "../shared/header";
import React from "react";

const screens = {
  Data: {
    screen: Data,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Data" />,
      };
    },
  },
};

const DataStack = createStackNavigator(screens, {
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

export default createAppContainer(DataStack);
