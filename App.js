import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase/app";
require("dotenv").config();

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

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>...Loading...</Text>
        </View>
      );
    }
    if (!loggedIn) {
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

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>User is Logged In</Text>
      </View>
    );
  }
}

export default App;
