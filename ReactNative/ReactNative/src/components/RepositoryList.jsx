import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import repositorios from "../data/repositorios.js";
import RepositoryItem from "./RepositoryItems.jsx";
import PropTypes from "prop-types";

function RepositoryList (props){
  console.log(props)
  return (
    /*FlatList nos crea una lista de elemtos
     agrupandolos en cotenedores

     2) Al llamar otros componentes que necesitan un parametro 
     de entrada se debe de pasar el parametro entre llaves {}

     */
    <SafeAreaView>
    <FlatList
      data={repositorios}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <RepositoryItem { ...repo }/>
      )}
    />
    </SafeAreaView>
  );
};

export default RepositoryList;
