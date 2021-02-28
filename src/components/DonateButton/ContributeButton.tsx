import React, { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { FontAwesome, FontAwesome5, Entypo } from "@expo/vector-icons";
import Clipboard from "expo-clipboard";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import Box from "../../theme/Components/Box";
import Text from "../../theme/Components/Text";
import { ImageBox } from "../../theme/Components/ImageBox";
import { CustomAnimatedView } from "../../theme/Components/CustomAnimatedView";
import APP_DATA from "../../../APP_DATA";
import { PressableBox } from "../../theme/Components/PressableBox";

interface DonateButtonSquareProps {
  coin: string;
  qrCode: string;
  address: string;
}

const ContributeButton = (props: DonateButtonSquareProps) => {
  const { coin, qrCode, address } = props;
  const showQR = useSharedValue(0);

  const cardColor = () => {
    switch (coin) {
      case "bitcoin":
        return "btc";
        break;
      case "ethereum":
        return "card";
      case "monero":
        return "monero";
      case "paypal":
        return "paypal";
      default:
        return "btc";
        break;
    }
  };

  const fetchIcon = () => {
    switch (coin) {
      case "bitcoin":
        return (
          <FontAwesome
            name="bitcoin"
            size={Platform.OS === "web" ? 44 : 44}
            color="black"
          />
        );
        break;
      case "ethereum":
        return (
          <Box
            justifyContent={"center"}
            alignItems={"center"}
            width={{ phone: 70, tablet: 100, web: 100, desktop: 100 }}
            height={{ phone: 70, tablet: 100, web: 100, desktop: 100 }}
            borderRadius={50}
            backgroundColor={cardColor()}
          >
            <FontAwesome5
              name="ethereum"
              size={Platform.OS === "web" ? 44 : 44}
              color="black"
            />
          </Box>
        );
      case "monero":
        return (
          <Box
            justifyContent={"center"}
            alignItems={"center"}
            width={{ phone: 70, tablet: 100, web: 100, desktop: 100 }}
            height={{ phone: 70, tablet: 100, web: 100, desktop: 100 }}
            borderRadius={50}
            backgroundColor={cardColor()}
          >
            <FontAwesome5
              name="monero"
              size={Platform.OS === "web" ? 44 : 44}
              color="black"
            />
          </Box>
        );
      case "paypal":
        return (
          <Box
            justifyContent={"center"}
            alignItems={"center"}
            width={{ phone: 70, tablet: 100, web: 100, desktop: 100 }}
            height={{ phone: 70, tablet: 100, web: 100, desktop: 100 }}
            borderRadius={50}
            backgroundColor={cardColor()}
          >
            <Entypo name="paypal" size={44} color="black" />
          </Box>
        );

      default:
        break;
    }
  };

  const qrStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(showQR.value),
      transform: [
        { scale: withTiming(interpolate(showQR.value, [1, 0], [1, 1.4])) },
      ],
    };
  });

  const textStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(showQR.value),
    };
  });

  const copyToClipboard = () => {
    Clipboard.setString(address);
    showQR.value = 0;
  };

  return (
    <Box alignItems={"center"} marginLeft={"m"} marginRight={"m"}>
      <PressableBox
        //   borderWidth={1}
        //   flex={1}
        onLongPress={copyToClipboard}
        onPress={() => (showQR.value = showQR.value ? 0 : 1)}
        height={{ phone: 120, tablet: 200, web: 250, desktop: 250 }}
        width={{ phone: 120, tablet: 200, web: 250, desktop: 250 }}
        borderRadius={4}
        // marginTop={"l"}
        marginLeft={"m"}
        marginRight={"m"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={cardColor()}
        shadowColor={"shadowColor"}
        shadowOffset={{ width: 2, height: 5 }}
        shadowOpacity={0.5}
        shadowRadius={3.84}
        elevation={5}
      >
        {fetchIcon()}
        <CustomAnimatedView style={qrStyles} position={"absolute"} flex={1}>
          <ImageBox
            source={qrCode}
            resizeMode={"contain"}
            height={{ phone: 110, tablet: 190, web: 230, desktop: 230 }}
            width={{ phone: 110, tablet: 190, web: 230, desktop: 230 }}
            //   borderRadius={4}
            //   flex={1}
            //   width={70}
            //   height={70}
          />
        </CustomAnimatedView>
      </PressableBox>
      <CustomAnimatedView
        style={textStyles}
        width={{ phone: 120, tablet: 200, web: 250, desktop: 250 }}
        alignItems={"center"}
        marginBottom={"s"}
        marginTop={"s"}
      >
        <Text color={"white"} textAlign={"center"}>
          Press and hold to copy address
        </Text>
      </CustomAnimatedView>
    </Box>
  );
};

export default ContributeButton;
