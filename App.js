import React from "react";

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBe3SfknivwLjuOjSASWJTkvJydlLDAu-A",
  authDomain: "instaclone-c83de.firebaseapp.com",
  projectId: "instaclone-c83de",
  storageBucket: "instaclone-c83de.appspot.com",
  messagingSenderId: "878040324501",
  appId: "1:878040324501:web:a95208403aa991fa7a3e9c",
  measurementId: "G-86SG9LZ863",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
