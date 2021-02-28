import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import React, { useContext } from "react";
import { Platform } from "react-native";

import device from "../constants/device";
import { ErrorContext } from "../stores/ErrorContextProvider";
import { ThemeContext } from "../stores/ThemeContext";

import ErrorStackNavigator from "./ErrorStackNavigator";
import MobileTabNavigator from "./MobileTabNavigator";
import WebTabNavigator from "./WebTabNavigator";

const renderScreen = (error: Error | undefined) => {
  if (error) {
    return <ErrorStackNavigator />;
  }
  if (Platform.OS === "web" && device.width > 800) {
    return <WebTabNavigator />;
  }
  return <MobileTabNavigator />;
};

export const Screens = () => {
  const { theme } = useContext(ThemeContext);
  const { error } = useContext(ErrorContext);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>{renderScreen(error)}</NavigationContainer>
    </ThemeProvider>
  );
};
