import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

import { ThemeContext } from "../../stores/ThemeContext";
import Box from "../../theme/Components/Box";
import { CustomAnimatedView } from "../../theme/Components/CustomAnimatedView";
import { PressableBox } from "../../theme/Components/PressableBox";
import PrimaryTheme, { Theme } from "../../theme/Themes/Theme";
import { mainColors } from "../../theme/Themes/MainColors";
import PurpleTheme from "../../theme/Themes/Purple";
import FernTheme from "../../theme/Themes/Skorch";
import SalmonTheme from "../../theme/Themes/Salmon";
import ForestTheme from "../../theme/Themes/Forest";
interface ThemePickerProps {}

const ThemePicker = (props: ThemePickerProps) => {
  const { setTheme } = useContext(ThemeContext);
  const themePickerOpen = useSharedValue(0);
  const [open, setOpen] = useState(false);
  const caretRotation = useSharedValue(0);

  const theme = useTheme<Theme>();
  const { secondaryDark } = theme.colors;
  const themePickerStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(interpolate(themePickerOpen.value, [0, 1], [0, 100])),
      opacity: withTiming(interpolate(themePickerOpen.value, [0, 1], [0, 1])),
    };
  });

  const handleThemePress = () => {
    themePickerOpen.value = themePickerOpen.value ? 0 : 1;
    rotation.value = withTiming(rotation.value === -180 ? 0 : -180);
    setOpen(!open);
  };

  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],

      // flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 5,
      // position: "absolute",
      // bottom: 0,
    };
  });
  return (
    <SafeAreaView
      style={{
        position: "absolute",
        left: 20,
        top: 10,
        zIndex: 100,
        // flex: 1,
        // borderWidth: 1,
        alignItems: "center",
      }}
    >
      <CustomAnimatedView style={animatedStyle}>
        <PressableBox
          // flex={1}
          // borderWidth={1}
          justifyContent={"center"}
          // paddingBottom={"s"}
          onPress={handleThemePress}
        >
          <Ionicons
            name="caret-up-circle-outline"
            size={24}
            color={secondaryDark}
          />
          {/* {open ? (
            <Ionicons
              name="caret-up-circle-outline"
              size={24}
              color={secondaryDark}
            />
          ) : (
            <Ionicons
              name="caret-down-circle-outline"
              size={24}
              color={secondaryDark}
            />
          )} */}
        </PressableBox>
      </CustomAnimatedView>
      <CustomAnimatedView style={themePickerStyle}>
        <Box>
          <PressableBox
            borderWidth={1}
            //   flex={1}
            width={20}
            height={20}
            // backgroundColor={"primary"}
            style={{ backgroundColor: mainColors.blue }}
            borderRadius={50}
            onPress={() => {
              setTheme(PrimaryTheme);
              handleThemePress();
            }}
          />
          <PressableBox
            marginTop={"s"}
            borderWidth={1}
            width={20}
            height={20}
            style={{ backgroundColor: mainColors.purple }}
            borderRadius={50}
            onPress={() => {
              setTheme(PurpleTheme);
              handleThemePress();
            }}
          />

          <PressableBox
            marginTop={"s"}
            borderWidth={1}
            width={20}
            height={20}
            style={{ backgroundColor: mainColors.salmon }}
            borderRadius={50}
            onPress={() => {
              handleThemePress();
              setTheme(SalmonTheme);
            }}
          />
          <PressableBox
            marginTop={"s"}
            borderWidth={1}
            width={20}
            height={20}
            style={{ backgroundColor: mainColors.forest }}
            borderRadius={50}
            onPress={() => {
              handleThemePress();
              setTheme(ForestTheme);
            }}
          />
        </Box>
      </CustomAnimatedView>
    </SafeAreaView>
  );
};

export default ThemePicker;
