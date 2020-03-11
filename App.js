import React, { useState } from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import StackNavigator from './routes/drawer';

/* This is how to create a function like componentDidMount in a functional component instead of a class*/
const getFonts = () => Font.loadAsync({
  'groovy': require('./assets/fonts/Corben-Bold.ttf'),
  'curved-bold': require('./assets/fonts/Coustard-Black.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  /*Here is where we check to see if the state of font is loaded*/
  if (fontsLoaded) {
    return (
      <StackNavigator />
    );
  } else {
    return (
      /*Here is where you call on the AppLoading feature of expo and call on an async funciton of getFonts()*/
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}
