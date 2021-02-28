import React from "react";

import APP_DATA from "../../../APP_DATA";
import ContactForm from "../../components/ContactForm/ContactForm";
// import ContactForm from "../../components/ContactForm/ContactForm";
import device from "../../constants/device";
import Box from "../../theme/Components/Box";
import Text from "../../theme/Components/Text";

interface ContactWebProps {}

const Contact = (props: ContactWebProps) => {
  return (
    <Box
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"primary"}
      flexDirection={"row"}
    >
      <Box
        flex={1}
        height={device.height}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box flex={2} justifyContent={"flex-end"} alignItems={"flex-end"}>
          <Text variant={"aboutGiantText"}>Contact Us</Text>
        </Box>

        <Box
          flex={1.5}
          flexDirection={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          width={device.width / 2}
        >
          <Box>
            <Text variant={"aboutBodyText"}>{APP_DATA.contactStreet}</Text>
            <Text variant={"aboutBodyText"}>{APP_DATA.contactCity}</Text>
            <Text variant={"aboutBodyText"}>{APP_DATA.contactCountry}</Text>
          </Box>

          <Box>
            <Text variant={"aboutBodyText"}>{APP_DATA.email}</Text>
            <Text variant={"aboutBodyText"}>{APP_DATA.phoneNumber}</Text>
          </Box>
        </Box>
      </Box>
      <Box
        flex={1}
        height={device.height}
        justifyContent={"center"}
        alignItems={"center"}
        // borderWidth={1}
      >
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
