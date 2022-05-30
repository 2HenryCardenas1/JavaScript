import React from "react";
import { SafeAreaView,StyleSheet, Text, View } from "react-native";

function Signin(props) {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hola</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  label:{
      textAlign: "right",
  }
});

export default Signup;
