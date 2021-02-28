import { createBox } from "@shopify/restyle";
import React from "react";
import { Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import APP_DATA from "../../../APP_DATA";
import MobileSeal from "../../../assets/icons/MobileSeal";
import ContactForm from "../../components/ContactForm/ContactForm";
import device from "../../constants/device";
import Box from "../../theme/Components/Box";
import Text from "../../theme/Components/Text";
import { Theme } from "../../theme/Themes/Theme";

interface AboutWebProps {}

const CustomScrollView = createBox<
  Theme,
  React.ComponentProps<typeof ScrollView>
>(ScrollView);

const About = (props: AboutWebProps) => {
  return (
    <Box
      flex={1}
      justifyContent={{
        phone: "flex-end",
        tablet: "flex-end",
        web: "center",
        desktop: "center",
      }}
      alignItems={"center"}
      backgroundColor={"primary"}
      flexDirection={{
        phone: "column",
        tablet: "column",
        web: "row",
        desktop: "row",
      }}
    >
      <Box
        flex={{ phone: 0.7, tablet: 0.7, web: 1, desktop: 1 }}
        height={device.height}
        justifyContent={{
          phone: "flex-end",
          tablet: "flex-end",
          web: "center",
          desktop: "center",
        }}
        alignItems={"center"}
        paddingBottom={{
          phone: "l",
          tablet: "l",
          web: undefined,
          desktop: undefined,
        }}
      >
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
          <MobileSeal />
        </SafeAreaView>
      </Box>

      <Text
        variant={"aboutGiantText"}
        marginRight={{ phone: null, tablet: null, web: "xl", desktop: "xl" }}
      >
        About
      </Text>
      <CustomScrollView flex={{ phone: 1, tablet: 1, web: 2, desktop: 2 }}>
        <Box
          flexDirection={{
            phone: "column",
            tablet: "column",
            web: "row",
            desktop: "row",
          }}
          flex={{ phone: 1.5, tablet: 1.5, web: 2, desktop: 2 }}
        >
          <Box
            flex={1}
            justifyContent={{
              phone: undefined,
              tablet: undefined,
              web: "center",
              desktop: "center",
            }}
            alignItems={{
              phone: undefined,
              tablet: undefined,
              web: "center",
              desktop: "center",
            }}
            height={{
              phone: undefined,
              tablet: undefined,
              web: device.height,
              desktop: device.height,
            }}
            paddingBottom={"xl"}
            paddingLeft={"l"}
            paddingRight={"l"}
          >
            <Text variant={"aboutHeaderText"} marginBottom={"l"}>
              Values
            </Text>
            <Text variant={"aboutBodyText"}>{APP_DATA.values}</Text>
          </Box>
          <Box
            flex={1}
            justifyContent={{
              phone: undefined,
              tablet: undefined,
              web: "center",
              desktop: "center",
            }}
            alignItems={{
              phone: undefined,
              tablet: undefined,
              web: "center",
              desktop: "center",
            }}
            height={{
              phone: undefined,
              tablet: undefined,
              web: device.height,
              desktop: device.height,
            }}
            paddingTop={"xl"}
            paddingLeft={"l"}
            paddingRight={"l"}
          >
            <Text variant={"aboutHeaderText"} marginBottom={"l"}>
              Vision
            </Text>
            <Text variant={"aboutBodyText"}>{APP_DATA.vision}</Text>
          </Box>
        </Box>
        {Platform.OS !== "web" ? (
          <Box marginTop={"xl"}>
            <Box paddingLeft={{ phone: "l" }} paddingTop={"l"}>
              <Text variant={"aboutHeaderText"}>Contact</Text>
            </Box>

            <ContactForm />
          </Box>
        ) : null}
      </CustomScrollView>
    </Box>
  );
};

export default About;
