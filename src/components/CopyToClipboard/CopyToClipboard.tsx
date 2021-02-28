import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { Platform } from "react-native";
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { CustomAnimatedView } from "../../theme/Components/CustomAnimatedView";
import Box from "../../theme/Components/Box";
import { Theme } from "../../theme/Themes/Theme";
import { PressableBox } from "../EventCard/EventCard";

const CopyToClipboard = () => {
  const liked = useSharedValue(0);
  const theme = useTheme<Theme>();
  const { secondaryText } = theme.colors;

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value,
        },
      ],
      opacity: liked.value,
    };
  });

  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      marginLeft={{
        phone: "s",
        tablet: "s",
        web: undefined,
        desktop: undefined,
      }}
    >
      <PressableBox
        onPress={() => (liked.value = withSpring(liked.value ? 0 : 1))}
      >
        <CustomAnimatedView
          justifyContent={"center"}
          style={outlineStyle}
          position={"absolute"}
        >
          <AntDesign
            name="copy1"
            size={Platform.OS === "web" ? 24 : 18}
            color={secondaryText}
          />
        </CustomAnimatedView>

        <CustomAnimatedView style={fillStyle}>
          <AntDesign
            name="copy1"
            size={Platform.OS === "web" ? 24 : 18}
            color={"green"}
          />
        </CustomAnimatedView>
      </PressableBox>
    </Box>
  );
};

export default CopyToClipboard;
