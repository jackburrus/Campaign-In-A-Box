import API, { graphqlOperation } from "@aws-amplify/api";
import React, { useState } from "react";
import { Alert } from "react-native";

import device from "../../constants/device";
import { createContactMessage } from "../../graphql/mutations";
import Box from "../../theme/Components/Box";
import { CustomTextInput } from "../../theme/Components/CustomTextInput";
import { PressableBox } from "../../theme/Components/PressableBox";
import Text from "../../theme/Components/Text";

interface ContactFormProps {}

const ContactForm = (props: ContactFormProps) => {
  const [email, setEmail] = useState("Email");
  const [firstName, changeFirstName] = useState("First Name");
  const [lastName, changeLastName] = useState("Last Name");
  const [message, changeMessage] = useState("Message");
  const [messageSubmitted, setMessageSubmitted] = useState(false);

  const handleCreateContactMessage = async () => {
    if (!email || !firstName || !lastName || !message) {
      Alert.alert("Please fill in your details");
    } else {
      const contactMessage = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        message: message,
      };
      try {
        const contactMessageCreation = await API.graphql(
          graphqlOperation(createContactMessage, { input: contactMessage })
        );
        console.log(
          "Handled creation of contact message: ",
          contactMessageCreation
        );
        setEmail("Email");
        changeFirstName("First Name");
        changeLastName("Last Name");
        changeMessage("Message");
        setMessageSubmitted(true);
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <Box
      flex={{ phone: null, tablet: null, web: 0.7, desktop: 0.7 }}
      justifyContent={"flex-start"}
      alignItems={"center"}
      // borderWidth={1}
    >
      <Box
        width={{
          phone: device.width - 50,
          tablet: device.width,
          web: device.width / 4,
          desktop: device.width / 4,
        }}
        marginTop={{
          phone: "xl",
          tablet: "xl",
          web: null,
          desktop: null,
        }}
        // marginBottom={"xl"}
        height={device.height / 2}
        justifyContent={"space-evenly"}
        borderRadius={8}
        backgroundColor={"white"}
        shadowColor={"shadowColor"}
        shadowOffset={{ width: 2, height: 5 }}
        shadowOpacity={0.5}
        shadowRadius={3.84}
        elevation={5}
      >
        <Box>
          <CustomTextInput
            onChangeText={(email) => setEmail(email)}
            onFocus={() => setEmail("")}
            value={email}
            backgroundColor={"card"}
            height={50}
            marginTop={"m"}
            borderRadius={6}
            marginLeft={"l"}
            marginRight={"l"}
            paddingLeft={"m"}
          />
          <CustomTextInput
            onChangeText={(firstName) => changeFirstName(firstName)}
            onFocus={() => changeFirstName("")}
            value={firstName}
            backgroundColor={"card"}
            height={50}
            marginTop={"m"}
            borderRadius={6}
            marginLeft={"l"}
            marginRight={"l"}
            paddingLeft={"m"}
          />
          <CustomTextInput
            onChangeText={(ln) => changeLastName(ln)}
            onFocus={() => changeLastName("")}
            value={lastName}
            backgroundColor={"card"}
            height={50}
            marginTop={"m"}
            borderRadius={6}
            marginLeft={"l"}
            marginRight={"l"}
            paddingLeft={"m"}
          />
        </Box>
        <CustomTextInput
          onChangeText={(ms) => changeMessage(ms)}
          onFocus={() => changeMessage("")}
          value={message}
          backgroundColor={"card"}
          height={100}
          marginTop={"m"}
          borderRadius={6}
          marginLeft={"l"}
          marginRight={"l"}
          paddingLeft={"m"}
        />
        <Box
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
          paddingRight={"m"}
        >
          <PressableBox
            onPress={handleCreateContactMessage}
            backgroundColor={"buttonBackground"}
            padding={"s"}
            borderRadius={8}
            paddingLeft={"m"}
            paddingRight={"m"}
            width={{
              phone: 100,
              tablet: 100,
              web: device.width / 10,
              desktop: device.width / 10,
            }}
            height={40}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"m"}
          >
            <Text color={"buttonText"} fontSize={14}>
              {messageSubmitted ? "Thanks!" : "Submit"}
            </Text>
          </PressableBox>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
