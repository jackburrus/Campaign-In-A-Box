import { createBox } from "@shopify/restyle";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { NavigationRouteProp, NavigationScreenProp } from "react-navigation";

import device from "../../constants/device";
import Box from "../../theme/Components/Box";
import { ImageBox } from "../../theme/Components/ImageBox";
import { PressableBox } from "../../theme/Components/PressableBox";
import Text from "../../theme/Components/Text";
import { Theme } from "../../theme/Themes/Theme";

interface EventsRegisterProps {
  navigation: NavigationScreenProp<any, any>;
  route: NavigationRouteProp;
}

const CustomTextInput = createBox<
  Theme,
  React.ComponentProps<typeof TextInput>
>(TextInput);

const EventsRegister = (props: EventsRegisterProps) => {
  const { item } = props.route.params;

  const [email, onChangeEmail] = useState("Email");
  const [numberAttending, onChangeNumberAttending] = useState("1");
  return (
    <Box
      backgroundColor={"primary"}
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
    >
      <Box
        flex={{ phone: undefined, tablet: undefined, web: 1, desktop: 1.2 }}
        height={{
          phone: undefined,
          tablet: undefined,
          web: device.height,
          desktop: device.height,
        }}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"primary"}
      >
        <ImageBox
          source={{ uri: item.image }}
          width={{
            phone: undefined,
            tablet: undefined,
            web: device.width / 4,
            desktop: device.width / 4,
          }}
          height={{
            phone: undefined,
            tablet: undefined,
            web: device.height / 4,
            desktop: device.height / 4,
          }}
          borderRadius={{
            phone: undefined,
            tablet: undefined,
            web: 8,
            desktop: 8,
          }}
        />
      </Box>
      <Box
        flex={2}
        height={{
          phone: undefined,
          tablet: undefined,
          web: device.height,
          desktop: device.height,
        }}
        justifyContent={"center"}
      >
        <Box flex={1} justifyContent={"flex-end"}>
          <Text variant={"eventRegisterTitle"} marginTop={"s"}>
            {item.title}
          </Text>
          <Text variant={"eventRegisterDetails"} marginTop={"s"}>
            {item.date}
          </Text>
          <Text variant={"eventRegisterDetails"} marginTop={"s"}>
            {item.location}
          </Text>
        </Box>
        <Box flex={1}>
          <CustomTextInput
            onChangeText={(email) => onChangeEmail(email)}
            value={email}
            backgroundColor={"white"}
            height={50}
            width={device.width / 4}
            marginTop={"m"}
            borderRadius={6}
          />
          <CustomTextInput
            onChangeText={(numberAttending) =>
              onChangeNumberAttending(numberAttending)
            }
            value={numberAttending}
            backgroundColor={"white"}
            height={50}
            width={device.width / 6}
            marginTop={"m"}
            borderRadius={6}
          />
          <PressableBox
            backgroundColor={"lightRed"}
            padding={"s"}
            borderRadius={8}
            paddingLeft={"m"}
            paddingRight={"m"}
            width={device.width / 10}
            height={40}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"m"}
          >
            <Text color={"accent"} fontSize={20}>
              Register
            </Text>
          </PressableBox>
        </Box>
      </Box>
    </Box>
  );
};

export default EventsRegister;
