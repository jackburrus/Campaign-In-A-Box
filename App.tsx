import Amplify from "aws-amplify";
import AppLoading from "expo-app-loading";
import React from "react";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import awsconfig from "./src/aws-exports";
import useCachedResources from "./src/hooks/useCachedResources";
import { Screens } from "./src/navigation/RootNavigator";
import { ErrorContextProvider } from "./src/stores/ErrorContextProvider";
import { ThemeContextProvider } from "./src/stores/ThemeContext";

Amplify.configure(awsconfig);

export default function App() {
  const isLoadingComplete = useCachedResources();

  return !isLoadingComplete ? (
    <AppLoading />
  ) : (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorContextProvider>
        <ThemeContextProvider>
          <Screens />
        </ThemeContextProvider>
      </ErrorContextProvider>
    </SafeAreaProvider>
  );
}
