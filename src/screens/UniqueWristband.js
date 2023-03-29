import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const UniqueWristband = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        onPress={() => navigation.navigate("SummaryEvaluationForm1")}
        title="Click to next page"
      ></Button>
    </SafeAreaView>
  );
};

export default UniqueWristband;

const styles = StyleSheet.create({});
