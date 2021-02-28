import { createBox } from "@shopify/restyle";
import Animated from "react-native-reanimated";
import { ViewProps, ViewStyle } from "react-native";

import { Theme } from "./Themes/Theme";
export const CustomAnimatedView = createBox<
  Theme,
  Animated.AnimateProps<ViewStyle, ViewProps>
>(Animated.View);
