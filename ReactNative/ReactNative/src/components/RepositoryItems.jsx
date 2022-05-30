import React from "react";
import { Image, View, StyleSheet, SafeAreaView, Button } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";
import PropTypes from "prop-types";

/*
-Componente para crear estilos : StyleSheet
-Recive un arreglo de propssitorio
-No se usan {}, solo para llamadas
*/

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => (
  <SafeAreaView style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex:1 }}>
      <StyledText fontWeights="bold" color="primary">
        {fullName}
      </StyledText>
      <StyledText>{description} </StyledText>
      <StyledText style={styles.language}>{language} </StyledText>
    </View>  
  </SafeAreaView>
);

const RepositoryItem = (props) => (
  console.log(props),
  <SafeAreaView key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 5, paddingTop: 5 },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 4,
    overflow: "hidden",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
