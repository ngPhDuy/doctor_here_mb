import React from "react";
import { Text, Button, StyleSheet, View } from "react-native";

type Props = {
  goToCallScreen: () => void;
};

export const HomeScreen = ({ goToCallScreen }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Video Calling Tutorial</Text>
      <Button title="Join Video Call" onPress={goToCallScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
