import API, { graphqlOperation } from "@aws-amplify/api";
import { useTheme } from "@shopify/restyle";
import React, { useEffect, useRef, useState } from "react";
import { ImageSourcePropType, processColor } from "react-native";
import { Divider } from "react-native-paper";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useHover } from "react-native-web-hooks";

import device from "../../constants/device";
import { createEventRegistration } from "../../graphql/mutations";
import Box from "../../theme/Components/Box";
import { CustomAnimatedView } from "../../theme/Components/CustomAnimatedView";
import { Theme } from "../../theme/Themes/Theme";

import EventDetails from "./EventDetails";
import EventImage from "./EventImage";
import RegisterButton from "./RegisterButton";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  image: ImageSourcePropType;
  description: string;
  location: string;
  nav: () => void;
}

const EventCard = (props: EventCardProps) => {
  const { title, date, image, description, location, nav, id } = props;
  const ref = useRef(null);
  const scaleAnimationValue = useSharedValue(1);
  const registerBoxWidth = useSharedValue(120);
  const [email, onChangeText] = React.useState("Email");

  const isHovered = useHover(ref);
  const [registerActive, setRegisterActive] = useState(false);
  const registered = useSharedValue(0);
  const theme = useTheme<Theme>();
  const { primary } = theme.colors;

  const color = useSharedValue("white");

  const bgStyle = useAnimatedStyle(() => ({
    backgroundColor: color.value,
  }));

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

  const registerStyle = useAnimatedStyle(() => ({
    width: withSpring(registerBoxWidth.value),
  }));

  const register = async () => {
    try {
      const registerUser = {
        email: email,
        eventRegistrationEventId: id,
      };
      const registerUserReturned = await API.graphql(
        graphqlOperation(createEventRegistration, { input: registerUser })
      );
      console.log("Handled creation of registration: ", registerUserReturned);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRegistrationButton = () => {
    registered.value = 1;
    color.value = withTiming(processColor(primary));
    onChangeText("See you there!");
    register();
  };

  return (
    <CustomAnimatedView style={style}>
      <Box
        ref={device.width > 500 ? ref : null}
        paddingTop={{
          phone: "l",
          tablet: "l",
          web: null,
          desktop: null,
        }}
        marginTop={"xl"}
        marginRight={{
          phone: undefined,
          tablet: undefined,
          web: "xl",
          desktop: "xl",
        }}
        borderRadius={{
          phone: 6,
          tablet: 4,
          web: 12,
          desktop: 12,
        }}
        backgroundColor={"white"}
        shadowColor={"shadowColor"}
        shadowOffset={{ width: 2, height: 5 }}
        shadowOpacity={0.5}
        shadowRadius={3.84}
        elevation={5}
      >
        <Box
          flexDirection={{
            phone: "row",
            tablet: "row",
            web: "column",
            desktop: "column",
          }}
          flex={3}
        >
          <EventImage image={image} />

          <EventDetails
            title={title}
            location={location}
            date={date}
            setRegisterActive={setRegisterActive}
            registerBoxWidth={registerBoxWidth}
          />
        </Box>
        <Divider />
        <RegisterButton
          registerStyle={registerStyle}
          registered={registered}
          handleRegistrationButton={handleRegistrationButton}
          registerActive={registerActive}
          setRegisterActive={setRegisterActive}
          bgStyle={bgStyle}
          registerBoxWidth={registerBoxWidth}
          onChangeText={onChangeText}
          email={email}
        />
      </Box>
    </CustomAnimatedView>
  );
};

export default EventCard;
