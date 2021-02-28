import { Ionicons } from "@expo/vector-icons";
import { createBox } from "@shopify/restyle";
import React from "react";
import { Image, ImageSourcePropType, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import device from "../../constants/device";
import Box from "../../theme/Components/Box";
import { PressableBox } from "../../theme/Components/PressableBox";
import Text from "../../theme/Components/Text";
import { Theme } from "../../theme/Themes/Theme";

interface IssueDetailsScreenProps {
  title: string;
  body: string;
  image: ImageSourcePropType;
}

const ImageBox = createBox<Theme, React.ComponentProps<typeof Image>>(Image);

const IssueDetailsScreen = ({
  props: IssueDetailsScreenProps,
  route,
  navigation,
}) => {
  const {
    category,
    image,
    position,
    detailedPosition,
    tags,
  } = route.params.item;
  return (
    <Box
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"primary"}
      paddingTop={{
        phone: undefined,
        tablet: undefined,
        web: "m",
        desktop: "m",
      }}
    >
      <Box
        flex={1}
        width={{
          phone: device.width,
          tablet: device.width,
          web: device.width / 2,
          desktop: device.width / 2,
        }}
      >
        <ImageBox
          source={{ uri: image }}
          width={{
            phone: undefined,
            tablet: undefined,
            web: undefined,
            desktop: undefined,
          }}
          height={{
            phone: undefined,
            tablet: undefined,
            web: undefined,
            desktop: undefined,
          }}
          flex={{ phone: 1, tablet: undefined, web: 1, desktop: 1 }}
          borderRadius={6}
          resizeMode={"cover"}
        />
      </Box>
      {Platform.OS !== "web" ? (
        <PressableBox
          onPress={() => navigation.goBack()}
          width={device.width}
          marginLeft={"l"}
          marginTop={"m"}
        >
          <Ionicons name={"ios-arrow-back-sharp"} size={36} color="white" />
        </PressableBox>
      ) : null}

      <Box
        flex={2}
        width={{
          phone: undefined,
          tablet: undefined,
          web: device.width / 2,
          desktop: device.width / 2,
        }}
        alignItems={"center"}
      >
        <Text variant={"issuePrimary"}>{category}</Text>
        <Box
          flexDirection={"row"}
          width={{
            phone: device.width / 1.2,
            tablet: device.width / 1.2,
            web: device.width / 3,
            desktop: device.width / 4,
          }}
          flexWrap={{
            phone: "wrap",
            tablet: "wrap",
            web: undefined,
            desktop: undefined,
          }}
          justifyContent={"center"}
          marginTop={{
            phone: undefined,
            tablet: undefined,
            web: "m",
            desktop: "m",
          }}
          marginBottom={{
            phone: undefined,
            tablet: undefined,
            web: "m",
            desktop: "m",
          }}
        >
          {tags.length > 0 &&
            tags.map((item, index) => {
              return (
                <Box
                  key={index}
                  backgroundColor={"white"}
                  padding={"s"}
                  borderRadius={4}
                  paddingLeft={"s"}
                  paddingRight={"s"}
                  margin={{
                    phone: "s",
                    tablet: "s",
                    web: "m",
                    desktop: "m",
                  }}
                >
                  <Text color={"accent"}>#{item}</Text>
                </Box>
              );
            })}
        </Box>
        <ScrollView>
          <Text
            marginTop={"m"}
            variant={"issueSecondary"}
            textAlign={"auto"}
            // color={"white"}
            fontSize={{ phone: 16, tablet: 16, web: 24, desktop: 24 }}
            margin={{
              phone: "l",
              tablet: "l",
              web: undefined,
              desktop: undefined,
            }}
          >
            {detailedPosition}
          </Text>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default IssueDetailsScreen;
