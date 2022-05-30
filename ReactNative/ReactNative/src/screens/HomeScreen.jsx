import React from "react";
import { View, Button, SafeAreaView } from "react-native";
import RepositoryList from "../components/RepositoryList";

function HomeScreen(props) {
  //Traemos la pripiedad navigations
  const { navigation } = props;

  const goToPage = (page) => {
    navigation.navigate(page);
  };

  return (
    <SafeAreaView>
      {/*
            Creacion de boton con direccion a otra vista*/}
      <Button
        onPress={() => goToPage("Detalles")}
        title="Nuevo boton con navigate stack"
      />
      <RepositoryList />
    </SafeAreaView>
  );
}

export default HomeScreen;
