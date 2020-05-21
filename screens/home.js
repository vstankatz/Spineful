import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View>
        <Text style={styles.first}>
          Welcome to Spineful, the mindfullness app for your spine!
        </Text>
      </View>
      <View>
        <Text style={styles.second}>
          Spineful aims to make people more aware of the damage they're doing to
          themselves with their daily phone usage.
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Data")}>
        <Text style={styles.button}>Check Your Spine Pressure Now!</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.source}>
          {" "}
          The data used to create this app is based off of the Assessment of
          Stresses in the Cervical Spine Caused by Posture and Position of the
          Head by K.K. Hansraj, MD, Chief of Spine Surgery - New York Spine
          Surgery & Rehabilitation Medicine
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sources")}>
          <Text style={styles.sourceLink}>See Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  first: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color: "#8BACFE",
  },
  second: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 17,
  },
  source: {
    padding: 20,
    fontSize: 15,
    textAlign: "center",
  },
  sourceLink: {
    textDecorationLine: "underline",
    textAlign: "center",
    padding: 10,
    color: "#8BACFE",
    fontSize: 16,
  },
  button: {
    color: "#8BACFE",
    textAlign: "center",
    fontSize: 19,
    textDecorationLine: "underline",
    paddingTop: 10,
  },
});
