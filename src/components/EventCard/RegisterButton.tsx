import React from "react";
import Animated from "react-native-reanimated";
import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

import Box from "../../theme/Components/Box";
import { CustomAnimatedView } from "../../theme/Components/CustomAnimatedView";
import { CustomTextInput } from "../../theme/Components/CustomTextInput";
import { PressableBox } from "../../theme/Components/PressableBox";
import Text from "../../theme/Components/Text";
import { Theme } from "../../theme/Themes/Theme";

interface RegisterButtonProps {
  registerStyle: Animated.AnimateStyle;
  registered: Animated.SharedValue<number>;
  registerActive: boolean;
  setRegisterActive: () => void;
  bgStyle: Animated.AnimateStyle;
  handleRegistrationButton: () => void;
  registerBoxWidth: Animated.SharedValue<number>;
}

const RegisterButton = (props: RegisterButtonProps) => {
  const {
    registerStyle,
    registered,
    registerActive,
    bgStyle,
    setRegisterActive,
    handleRegistrationButton,
    registerBoxWidth,
    onChangeText,
    email,
  } = props;
  const theme = useTheme<Theme>();
  const { lightAccent, buttonBackground, buttonText, primary } = theme.colors;

  return (
    <Box
      alignItems={{
        phone: "flex-end",
        tablet: "flex-end",
        web: "flex-end",
        desktop: "flex-end",
      }}
      margin={{
        phone: undefined,
        tablet: undefined,
        web: "l",
        desktop: "l",
      }}
      justifyContent={"center"}
      flex={{ phone: 2, tablet: 2, web: 0.5, desktop: 0.5 }}
    >
      <CustomAnimatedView
        flex={{ phone: 1, tablet: 1, web: null, desktop: null }}
        margin={{
          phone: "s",
          tablet: "s",
          web: undefined,
          desktop: undefined,
        }}
        backgroundColor={"buttonBackground"}
        padding={{
          phone: "s",
          tablet: "s",
          web: "s",
          desktop: "s",
        }}
        borderRadius={8}
        paddingLeft={"m"}
        paddingRight={"m"}
        style={registerStyle}
        justifyContent={{
          phone: "center",
          tablet: "center",
          web: undefined,
          desktop: undefined,
        }}
      >
        {registerActive ? (
          <Box
            flexDirection={"row"}
            alignItems={"center"}
            flex={{
              phone: 1,
              tablet: 1,
              web: undefined,
              desktop: undefined,
            }}
          >
            <PressableBox onPress={handleRegistrationButton}>
              <CustomAnimatedView
                marginRight={"s"}
                padding={"s"}
                borderRadius={20}
                paddingTop={{
                  phone: "s",
                  tablet: "s",
                  web: undefined,
                  desktop: undefined,
                }}
                paddingBottom={{
                  phone: "s",
                  tablet: "s",
                  web: undefined,
                  desktop: undefined,
                }}
                style={bgStyle}
              >
                {registered.value ? (
                  <Feather name="check" size={12} color="white" />
                ) : (
                  <AntDesign
                    name="arrowup"
                    size={12}
                    color={registered.value ? buttonText : buttonBackground}
                  />
                )}
              </CustomAnimatedView>
            </PressableBox>

            <CustomTextInput
              style={{
                color: buttonText,
                fontWeight: "bold",
                fontSize: 14,
              }}
              // color={"lightAccent"}
              height={{ phone: 30, tablet: 30, web: 30, desktop: 30 }}
              justifyContent={{
                phone: "center",
                tablet: "center",
                web: undefined,
                desktop: undefined,
              }}
              onChangeText={(text) => onChangeText(text)}
              onFocus={() => onChangeText("")}
              value={email}
            />
          </Box>
        ) : (
          <PressableBox
            onPress={() => {
              setRegisterActive(true);
              registerBoxWidth.value = 250;
            }}
            justifyContent={"center"}
            alignItems={"center"}
            height={30}
          >
            <Text
              color={"buttonText"}
              fontSize={{ phone: 14, tablet: 14, web: 16, desktop: 16 }}
              fontWeight={"bold"}
            >
              Register
            </Text>
          </PressableBox>
        )}
      </CustomAnimatedView>
    </Box>
  );
};

export default RegisterButton;
