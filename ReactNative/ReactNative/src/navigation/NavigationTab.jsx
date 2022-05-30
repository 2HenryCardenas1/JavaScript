import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import SignupScreen from "../screens/SigninScreen";
import HomeScreen from "../screens/HomeScreen";
import {
  HomeStackScreen,
  SignInStackScreen,
} from "../navigation/NavigationStack/NavigationStack";

const Tab = createBottomTabNavigator();

function NavigationTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let etiqueta;
          if (route.name === "Repositorios") {
            iconName = focused ? "ios-home" : "ios-home-outline";
            etiqueta = <Ionicons name={iconName} size={size} color={color} />;
          }
          if (route.name === "Sign-In") {
            iconName = focused ? "user-circle" : "user-circle-o";
            etiqueta = (
              <FontAwesome name={iconName} size={size} color={color} />
            );
          }

          // retornamos la etiqueta
          return etiqueta;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Repositorios" component={HomeStackScreen} />
      <Tab.Screen name="Sign-In" component={SignInStackScreen} />
    </Tab.Navigator>
  );
}

export default NavigationTab;
