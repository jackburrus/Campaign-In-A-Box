import React, { Dispatch, SetStateAction } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

import Box from "../../theme/Components/Box";
import Text from "../../theme/Components/Text";

interface EventDetailsProps {
  title: string;
  location: string;
  date: string;
  setRegisterActive: Dispatch<SetStateAction<boolean>>;
  registerBoxWidth: Animated.SharedValue<number>;
}

const EventDetails = (props: EventDetailsProps) => {
  const { title, location, date, setRegisterActive, registerBoxWidth } = props;
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={() => {
        setRegisterActive(false);
        registerBoxWidth.value = 120;
      }}
    >
      <Box
        flex={{ phone: 1, tablet: 1, web: 1, desktop: 1 }}
        padding={"m"}
        justifyContent={"space-between"}
      >
        <Text variant={"issueCardTextTitle"}>{title}</Text>
        <Text
          marginTop={{
            phone: undefined,
            tablet: undefined,
            web: "s",
            desktop: "s",
          }}
          variant={"issueCardTextTitle"}
          fontSize={12}
        >
          {date}
        </Text>
        <Text
          marginTop={{
            phone: undefined,
            tablet: undefined,
            web: "s",
            desktop: "s",
          }}
          variant={"issueCardTextTitle"}
          fontSize={12}
        >
          {location} <EvilIcons name="location" size={16} color="black" />
        </Text>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default EventDetails;
