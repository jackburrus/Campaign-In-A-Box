import { createBox } from "@shopify/restyle";
import { Pressable } from "react-native";

import { Theme } from "./Themes/Theme";

export const PressableBox = createBox<
  Theme,
  React.ComponentProps<typeof Pressable>
>(Pressable);
