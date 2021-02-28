import React from "react";
import { Image, ImageSourcePropType } from "react-native";

import Box from "../../theme/Components/Box";
import Text from "../../theme/Components/Text";

interface IssueProps {
  title: string;
  body: string;
  image: ImageSourcePropType;
}

const Issue = (props: IssueProps) => {
  const { title, body, image } = props;
  return (
    <Box
      flexDirection={"row"}
      marginTop={"l"}
      borderRadius={8}
      width={{
        phone: 400,
        tablet: 700,
        web: 1200,
        desktop: 1400,
      }}
    >
      <Box flex={1}>
        <Image
          source={image}
          style={{
            height: undefined,
            width: undefined,
            flex: 1,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
          resizeMode={"cover"}
        />
      </Box>
      <Box
        flex={2}
        padding={{ phone: "s", tablet: "s", web: "l", desktop: "l" }}
      >
        <Text variant={"issuePrimary"}>{title}</Text>
        <Text variant={"issueSecondary"}>{body}</Text>
      </Box>
    </Box>
  );
};

export default Issue;
