import { createBox } from "@shopify/restyle";
import { TextInput } from "react-native";

import { Theme } from "./Themes/Theme";

export const CustomTextInput = createBox<
  Theme,
  React.ComponentProps<typeof TextInput>
>(TextInput);
