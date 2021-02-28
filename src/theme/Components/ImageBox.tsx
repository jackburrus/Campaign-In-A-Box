import { createBox } from "@shopify/restyle";
import { Image } from "react-native";
import CachedImage from "react-native-expo-cached-image";

import { Theme } from "./Themes/Theme";

export const ImageBox = createBox<Theme, React.ComponentProps<typeof Image>>(
  Image
);
