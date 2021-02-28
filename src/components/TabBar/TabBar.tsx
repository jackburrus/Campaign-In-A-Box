import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { Image, Pressable, TouchableOpacity } from "react-native";
import { acc } from "react-native-reanimated";

import APP_DATA from "../../../APP_DATA";
import device from "../../constants/device";
import Box from "../../theme/Components/Box";
import { ImageBox } from "../../theme/Components/ImageBox";
import { PressableBox } from "../../theme/Components/PressableBox";
import Text from "../../theme/Components/Text";
import { Theme } from "../../theme/Themes/Theme";

interface TabBarWebProps {}

function TabBar({ state, descriptors, navigation, position }) {
  const theme = useTheme<Theme>();
  const {
    primary,
    accent,
    secondaryDark,
    buttonText,
    buttonBackground,
  } = theme.colors;
  const { phone, tablet, web, desktop } = theme.breakpoints;
  const [isWeb, setIsWeb] = useState(true);

  const checkDimensions = () => {
    if (device.width < 800) {
      setIsWeb(false);
    }
  };

  return (
    <Box flexDirection={"row"} backgroundColor={"primary"}>
      <Box>
        <Pressable onPress={() => navigation.navigate("HomeWeb")}>
          <ImageBox
            source={APP_DATA.logo}
            height={60}
            width={200}
            resizeMode={"contain"}
            marginTop={"s"}
          />
        </Pressable>
      </Box>
      <Box flexDirection={"row"} flex={2}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return route.name === "Contribute" ? null : (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,

                justifyContent: "center",
                alignItems: "center",
                backgroundColor: isFocused ? buttonBackground : primary,
                maxWidth: 100,
              }}
            >
              <Text
                style={{
                  color: isFocused ? buttonText : secondaryDark,
                  fontFamily: "SourceSansPro_700Bold",
                }}
                fontSize={{ phone: 12, tablet: 12, web: 18, desktop: 18 }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </Box>

      <Box
        flex={1}
        height={60}
        alignItems={"flex-end"}
        marginTop={"s"}
        marginRight={"m"}
      >
        <Box
          flex={1}
          width={{ phone: 100, tablet: 100, web: 150, desktop: 150 }}
        >
          <PressableBox
            onPress={() => navigation.navigate("Contribute")}
            backgroundColor={"accent"}
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={5}
          >
            <Text
              variant={"primaryText"}
              fontSize={{ phone: 18, tablet: 18, web: 24, desktop: 24 }}
            >
              Contribute
            </Text>
          </PressableBox>
        </Box>
      </Box>
    </Box>
  );
}

export default TabBar;
