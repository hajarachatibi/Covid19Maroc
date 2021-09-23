import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

class AuthLoadingScreen extends React.Component {
  render() {
    return <View style={styles.container}></View>;
  }
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
