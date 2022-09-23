import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function App() {
  const [number, set_number] = React.useState(null);
  const [result, set_result] = React.useState("unknown");

  function specialNumber() {
    if (generateResult()) {
      set_result("Is a special number");
    } else {
      set_result("isn't a special number");
    }
  }
  function generateResult() {
    const fixedNumber = 11;
    return (
      number % fixedNumber == 0 ||
      (number - 1) % fixedNumber == 0 ||
      (number - 7) % fixedNumber == 0
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text_style}>Special Number?</Text>
      <TextInput
        onChangeText={(number) => set_number(number)}
        placeholder="Enter a number"
        onSubmitEditing={specialNumber}
        style={styles.input_style}
      />
      <Text style={styles.text_style}>Result: {result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text_style: {
    fontSize: 25,
  },
  input_style: {
    fontSize: 25,
    height: 30,
    width: 300,
    textAlign: "center",
    backgroundColor: "lightyellow",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
