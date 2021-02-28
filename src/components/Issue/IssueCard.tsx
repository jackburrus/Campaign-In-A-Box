import { createBox } from "@shopify/restyle";
import { View as MotiView } from "moti";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Platform,
  ViewProps,
  ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useHover } from "react-native-web-hooks";

import device from "../../constants/device";
import Box from "../../theme/Components/Box";
import Text from "../../theme/Components/Text";
import { Theme } from "../../theme/Themes/Theme";

const ImageBox = createBox<Theme, React.ComponentProps<typeof Image>>(Image);
const CustomAnimatedView = createBox<
  Theme,
  Animated.AnimateProps<ViewStyle, ViewProps>
>(Animated.View);

interface IssueCardWebProps {
  category: string;
  body: string;
  learnMore?: () => void;
  image: ImageSourcePropType;
}

const IssueCard = (props: IssueCardWebProps) => {
  const { category, body, learnMore, image } = props;
  const progress = useSharedValue<number>(0);
  const ref = useRef(null);

  const scaleAnimationValue = useSharedValue(1);
  const isHovered = useHover(ref);

  useEffect(() => {
    if (isHovered) {
      scaleAnimationValue.value = 1.05;
    } else {
      scaleAnimationValue.value = 1;
    }
  }, [isHovered]);

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scaleAnimationValue.value) }],
  }));

  useEffect(() => {
    progress.value = withTiming(isHovered ? 1 : 0);
  }, [isHovered]);

  const [hovered, setHovered] = useState(false);
  return (
    <MotiView
      from={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        type: "timing",
        duration: 1000,

        scale: {
          type: "spring",
        },
      }}
    >
      <CustomAnimatedView style={style}>
        <Box
          ref={device.width > 500 ? ref : null}
          borderRadius={{ phone: 12, tablet: 12, web: 12, desktop: 12 }}
          margin={"m"}
          width={{
            phone: device.width / 2.4,
            tablet: 200,
            web: 300,
            desktop: 400,
          }}
          height={{
            phone: device.height / 5,
            tablet: 300,
            web: 450,
            desktop: 450,
          }}
          shadowColor={"shadowColor"}
          shadowOffset={{ width: 2, height: 5 }}
          shadowOpacity={0.5}
          shadowRadius={3.84}
          elevation={5}
        >
          <ImageBox
            // borderWidth={1}
            source={image}
            borderTopRightRadius={{
              phone: 12,
              tablet: 12,
              web: 12,
              desktop: 12,
            }}
            borderTopLeftRadius={{
              phone: 12,
              tablet: 12,
              web: 12,
              desktop: 12,
            }}
            height={undefined}
            width={undefined}
            flex={{ phone: 2, tablet: 2, web: 1, desktop: 1 }}
            resizeMode={"cover"}
          />

          <CustomAnimatedView
            flex={{ phone: 1, tablet: 1.5, web: 1, desktop: 1 }}
            style={{
              backgroundColor: "white",
            }}
            borderBottomRightRadius={{
              phone: 12,
              tablet: 12,
              web: 12,
              desktop: 12,
            }}
            borderBottomLeftRadius={{
              phone: 12,
              tablet: 12,
              web: 12,
              desktop: 12,
            }}
          >
            <Box
              flex={{
                phone: 1,
                tablet: 1,
              }}
              marginLeft={{
                phone: undefined,
                tablet: undefined,
                web: "l",
                desktop: "l",
              }}
              justifyContent={{
                phone: "center",
                tablet: "center",
                web: "flex-start",
                desktop: "flex-start",
              }}
              alignItems={{
                phone: "center",
                tablet: "center",
                web: "flex-start",
                desktop: "flex-start",
              }}
              marginRight={{
                phone: undefined,
                tablet: undefined,
                web: "l",
                desktop: "l",
              }}
              marginTop={{
                phone: undefined,
                tablet: "l",
                web: "m",
                desktop: "m",
              }}
            >
              <Text marginBottom={"m"} variant={"issueCardTextTitle"}>
                {category}
              </Text>
              {Platform.OS === "web" && device.width > 800 ? (
                <Text variant={"issueCardTextBody"}>{body}</Text>
              ) : null}
            </Box>
          </CustomAnimatedView>
        </Box>
      </CustomAnimatedView>
    </MotiView>
  );
};
export default IssueCard;
