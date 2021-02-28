import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme } from "@shopify/restyle";
import React from "react";

import About from "../screens/About/About";
import Contribute from "../screens/Contribute/Contribute";
import Events from "../screens/Events/Events";
import Home from "../screens/Home/Home";
import { Theme } from "../theme/Themes/Theme";

import IssueStackNavigator from "./IssuesStackNavigator";
import { MobileRoutes } from "./Routes";

interface MobileTabNavigatorProps {}

const MobileNavigator = createMaterialBottomTabNavigator<MobileRoutes>();

const MobileTabNavigator = (props: MobileTabNavigatorProps) => {
  const colorTheme = useTheme<Theme>();
  const {
    secondaryText,
    textLight,
    primary,
    primaryDark,
    secondary,
  } = colorTheme.colors;
  // console.log("fontlight", textLight);
  return (
    <MobileNavigator.Navigator
      initialRouteName={"Home"}
      barStyle={{ backgroundColor: primary }}
      labeled={true}
      shifting={false}
      activeColor={textLight}
      inactiveColor={primaryDark}
    >
      <MobileNavigator.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <MobileNavigator.Screen
        component={About}
        name="About"
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="md-information-circle-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <MobileNavigator.Screen
        component={IssueStackNavigator}
        name="IssuesMobile"
        options={{
          tabBarLabel: "Issues",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="text-box-check-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <MobileNavigator.Screen
        component={Events}
        name="Events"
        options={{
          tabBarLabel: "Events",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="event-available" size={24} color={color} />
          ),
        }}
      />

      <MobileNavigator.Screen
        component={Contribute}
        name="Contribute"
        options={{
          tabBarLabel: "Contribute",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="donate" size={24} color={color} />
          ),
        }}
      />
    </MobileNavigator.Navigator>
  );
};

export default MobileTabNavigator;
