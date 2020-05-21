import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Sources from "../screens/sources";
import Header from "../shared/header";
import React from "react";

const screens = {
  Sources: {
    screen: Sources,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Sources" />,
      };
    },
  },
};

const SourceStack = createStackNavigator(screens, {
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
    headerTintColor: "white",
  },
});

export default createAppContainer(SourceStack);
