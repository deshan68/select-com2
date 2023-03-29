import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SummaryformButton = ({ title, navigation, screenKey }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("SummaryEvaluationForm2")}
      style={styles.button}
    >
      <Text style={styles.buttnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SummaryformButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 52,
    backgroundColor: "#00B0F0",
    marginVertical: 14,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  buttnText: {
    color: "#ffff",
    fontWeight: "700",
    fontSize: 16,
  },
});
