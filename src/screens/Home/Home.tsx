import API, { graphqlOperation } from "@aws-amplify/api";
import { View as MotiView } from "moti";
import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import APP_DATA from "../../../APP_DATA";
import MobileSeal from "../../../assets/icons/MobileSeal";
import Seal from "../../../assets/icons/MobileSeal";
import WebSeal from "../../../assets/icons/WebSeal";
import ThemePicker from "../../components/ThemePicker";
import device from "../../constants/device";
import { createSupporter } from "../../graphql/mutations";
import { ThemeContext } from "../../stores/ThemeContext";
import Box from "../../theme/Components/Box";
import { CustomTextInput } from "../../theme/Components/CustomTextInput";
import { ImageBox } from "../../theme/Components/ImageBox";
import { PressableBox } from "../../theme/Components/PressableBox";
import Text from "../../theme/Components/Text";

interface HomeWebProps {}

const Home = (props: HomeWebProps) => {
  const [email, setEmail] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleSubmitJoin = async () => {
    if (!email || !zipCode) {
      Alert.alert("Please fill in your details");
    } else {
      const supporter = {
        email: email,
        zip: zipCode,
      };
      try {
        const supporterCreation = await API.graphql(
          graphqlOperation(createSupporter, { input: supporter })
        );
        console.log("Handled creation of supporter: ", supporterCreation);
        setEmail("");
        setZipCode("");
        Alert.alert("Thanks for your support");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Box
        flex={1}
        justifyContent={"space-around"}
        alignItems={"center"}
        backgroundColor={"primary"}
      >
        <ThemePicker />

        <MotiView
          style={{
            flex: 1,

            alignItems: "center",
            justifyContent: "center",
          }}
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "timing",
            duration: 1000,
            scale: {
              type: "spring",
            },
          }}
        >
          <TouchableWithoutFeedback
            style={{ flex: 1 }}
            onPress={Keyboard.dismiss}
          >
            {Platform.OS === "web" ? (
              <Box
                width={{ phone: 300, tablet: 300, web: 450, desktop: 450 }}
                height={{ phone: 300, tablet: 300, web: 450, desktop: 450 }}
                // borderWidth={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <WebSeal />
              </Box>
            ) : (
              <SafeAreaView style={{ flex: 1, justifyContent: "flex-end" }}>
                <MobileSeal />
              </SafeAreaView>
            )}
          </TouchableWithoutFeedback>
        </MotiView>
        <MotiView
          style={{
            flex: 1.2,

            justifyContent: "center",
            alignItems: "center",
          }}
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "timing",
            duration: 1000,

            scale: {
              type: "spring",
            },
          }}
        >
          <Box
            flex={1}
            alignItems={"center"}
            justifyContent={"center"}
            marginTop={isKeyboardVisible ? "l" : undefined}
            marginBottom={isKeyboardVisible ? undefined : "l"}
            width={{
              phone: 300,
              tablet: 400,
              web: 600,
              desktop: 600,
            }}
          >
            <Text
              variant={"primaryText"}
              marginBottom={"s"}
              fontSize={{
                phone: isKeyboardVisible ? 14 : 36,
                tablet: isKeyboardVisible ? 14 : 36,
                web: 54,
                desktop: 54,
              }}
            >
              Welcome!
            </Text>
            <Text
              textAlign={"center"}
              variant={"secondaryText"}
              color={"white"}
              fontSize={{
                phone: isKeyboardVisible ? 14 : 24,
                tablet: isKeyboardVisible ? 14 : 24,
                web: 36,
                desktop: 36,
              }}
            >
              {APP_DATA.welcomeMessage}
            </Text>
          </Box>

          <Box
            flex={1}
            borderColor={"accent"}
            width={{
              phone: 350,
              tablet: 500,
              web: 600,
              desktop: 600,
            }}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Box flex={2} marginRight={"m"} height={50} borderRadius={10}>
              <CustomTextInput
                placeholder={"Email"}
                onChangeText={(text) => setEmail(text)}
                backgroundColor={"white"}
                flex={1}
                borderRadius={6}
                paddingLeft={"m"}
              />
            </Box>
            <Box flex={1} height={50} borderRadius={10}>
              <CustomTextInput
                placeholder={"Zip"}
                onChangeText={(text) => setZipCode(text)}
                backgroundColor={"white"}
                flex={1}
                borderRadius={6}
                paddingLeft={"m"}
              />
            </Box>
            <Box
              flex={1}
              height={50}
              borderRadius={10}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundColor={"buttonBackground"}
              marginLeft={"m"}
              paddingLeft={"s"}
              paddingRight={"s"}
            >
              <TouchableOpacity onPress={() => handleSubmitJoin()}>
                <Text
                  textAlign={"center"}
                  color={"white"}
                  fontFamily={"SourceSansPro_700Bold"}
                >
                  {Platform.OS === "web" ? "Join The Team" : "Join"}
                </Text>
              </TouchableOpacity>
            </Box>
          </Box>
          {/* </TouchableWithoutFeedback> */}
        </MotiView>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default Home;
