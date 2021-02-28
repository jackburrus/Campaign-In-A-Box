import { createBox } from "@shopify/restyle";
import { Image } from "react-native";
import Svg, { Path, Circle, SvgProps } from "react-native-svg";

import { Theme } from "./Themes/Theme";

export const CustomSvg = createBox<Theme, SvgProps<typeof Svg>>(Svg);
