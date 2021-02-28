import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TabBar from "../components/TabBar/TabBar";
import About from "../screens/About/About";
import Contact from "../screens/Contact/Contact";
import Contribute from "../screens/Contribute/Contribute";
import Events from "../screens/Events/Events";
import Home from "../screens/Home/Home";

import IssueStackNavigator from "./IssuesStackNavigator";
import { WebRoutes } from "./Routes";

interface WebTabNavigatorProps {}

const RootNavigatorWeb = createMaterialTopTabNavigator<WebRoutes>();

const WebTabNavigator = (props: WebTabNavigatorProps) => {
  return (
    <RootNavigatorWeb.Navigator
      initialRouteName={"Home"}
      tabBar={(props) => <TabBar {...props} />}
      lazy
    >
      <RootNavigatorWeb.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: "Home",
        }}
      />
      <RootNavigatorWeb.Screen
        component={About}
        name="AboutWeb"
        options={{
          tabBarLabel: "About",
        }}
      />
      <RootNavigatorWeb.Screen
        component={IssueStackNavigator}
        name="IssuesWeb"
        options={{
          tabBarLabel: "Issues",
        }}
      />
      <RootNavigatorWeb.Screen
        component={Events}
        name="Events"
        options={{
          tabBarLabel: "Events",
        }}
      />
      <RootNavigatorWeb.Screen
        component={Contact}
        name="Contact"
        options={{
          tabBarLabel: "Contact",
        }}
      />
      <RootNavigatorWeb.Screen
        component={Contribute}
        name="Contribute"
        options={{
          tabBarLabel: "Contribute",
        }}
      />
    </RootNavigatorWeb.Navigator>
  );
};

export default WebTabNavigator;
