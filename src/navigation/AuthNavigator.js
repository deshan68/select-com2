import { Button, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UniqueWristband from "../screens/UniqueWristband";
import SummaryEvaluationForm1 from "../screens/SummaryEvaluationForm1";
import SummaryEvaluationForm2 from "../screens/SummaryEvaluationForm2";
import SummaryEvaluationForm3 from "../screens/SummaryEvaluationForm3";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="UniqueWristband"
        component={UniqueWristband}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="SummaryEvaluationForm1"
        component={SummaryEvaluationForm1}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="SummaryEvaluationForm2"
        component={SummaryEvaluationForm2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SummaryEvaluationForm3"
        component={SummaryEvaluationForm3}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
