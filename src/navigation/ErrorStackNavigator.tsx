import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { navigationOptions } from "../constants/navigation";
import ErrorScreen from "../screens/Error/ErrorScreen";

import { ErrorRoutes } from "./Routes";

interface ErrorStackNavigatorProps {}
const ErrorNavigator = createStackNavigator<ErrorRoutes>();

const ErrorStackNavigator = (props: ErrorStackNavigatorProps) => {
  return (
    <ErrorNavigator.Navigator {...navigationOptions}>
      <ErrorNavigator.Screen component={ErrorScreen} name="ErrorScreen" />
    </ErrorNavigator.Navigator>
  );
};

export default ErrorStackNavigator;
