import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  const styles = StyleSheet.create({
    header: {
      width: "100%",
      height: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      position: "absolute",
      right: -50,
    },
    headerText: {},
  });

  if ((title === "Stretches") | (title === "Stretch")) {
    styles.headerText = {
      fontWeight: "bold",
      fontSize: 25,
      color: "#F4F7FF",
    };
  } else {
    styles.headerText = {
      fontWeight: "bold",
      fontSize: 30,
      color: "#F4F7FF",
    };
  }

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
        color="#F4F7FF"
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}
