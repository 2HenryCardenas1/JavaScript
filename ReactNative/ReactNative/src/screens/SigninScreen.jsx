import React from "react";
import { Text, SafeAreaView, Button } from "react-native";
import Signup from "../components/Signin";

function SignupScreen(props) {
  //Traemos la pripiedad navigations
  const { navigation } = props;

  const goToPage = (page) => {
    navigation.navigate(page);
  };

  return (
    <SafeAreaView>
      <Button onPress={() => goToPage("Repositorios")} title="Ir a Detalles"/>
      <Signup />
      
    </SafeAreaView>
  );
}

export default SignupScreen;
