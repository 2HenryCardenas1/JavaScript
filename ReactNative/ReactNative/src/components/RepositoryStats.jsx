import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet, Button, SafeAreaView } from "react-native";
import StyledText from "./StyledText";

//Metodo para parsear los stars

const Stack = createNativeStackNavigator();

function RepositoryStats(props) {
  console.log(props);

  const { navigation } = props;

  const goToPage = (page) => {
    navigation.navigate(page);
  };

  const parseThousands = (value) => {
    return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
  };

  return (
    <SafeAreaView >
      <SafeAreaView style={styles.container}>
        <SafeAreaView>
          <StyledText textAlign="center" fontWeights="bold">
            {parseThousands(props.stargazersCount)}
          </StyledText>
          <StyledText textAlign="center">Stars</StyledText>
        </SafeAreaView>
        <SafeAreaView>
          <StyledText textAlign="center" fontWeights="bold">
            {parseThousands(props.forksCount)}
          </StyledText>
          <StyledText textAlign="center">Forks</StyledText>
        </SafeAreaView>
        <SafeAreaView>
          <StyledText textAlign="center" fontWeights="bold">
            {props.reviewCount}
          </StyledText>
          <StyledText textAlign="center">Review</StyledText>
        </SafeAreaView>
        <SafeAreaView>
          <StyledText textAlign="center" fontWeights="bold">
            {props.ratingAverage}
          </StyledText>
          <StyledText textAlign="center">Rating</StyledText>
        </SafeAreaView>
      </SafeAreaView>
      
      <SafeAreaView style={styles.button}>
        <Button
          title="Ver mas"
          color="black"
          onPress={() => goToPage("InfoRepo")}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-around" },
  button: {
    maxWidth: 100,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default RepositoryStats;
