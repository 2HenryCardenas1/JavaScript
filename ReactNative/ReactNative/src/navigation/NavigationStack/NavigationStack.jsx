import React from "react";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import RepositoryScreen from "../../screens/RepositoryScreen";
import SignupScreen from "../../screens/SigninScreen";


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Repositorios" component={HomeScreen} />
      {/*Aca creamos una ruta llamada details que nos manda a RepositoryScreen */}
      <HomeStack.Screen name="Detalles" component={RepositoryScreen} />
    </HomeStack.Navigator>
  );
}

const SignInStack = createNativeStackNavigator();

function SignInStackScreen() {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen name="Signin" component={SignupScreen} />
      <SignInStack.Screen name="Repositorios" component={HomeScreen} />
      {/*Aca creamos una ruta llamada details que nos manda a RepositoryScreen */}
      <SignInStack.Screen name="Detalles" component={RepositoryScreen} />
    </SignInStack.Navigator>
  );
}

//Como exportar varias dunciones

export {HomeStackScreen,  SignInStackScreen};

