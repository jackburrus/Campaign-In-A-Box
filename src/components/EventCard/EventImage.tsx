import React from "react";
import { ImageSourcePropType } from "react-native";

import { device } from "../../constants";
import Box from "../../theme/Components/Box";
import { ImageBox } from "../../theme/Components/ImageBox";

interface EventImageProps {
  image: ImageSourcePropType;
}

const EventImage = (props: EventImageProps) => {
  const { image } = props;
  return (
    <Box
      flex={{ phone: null, tablet: null, web: 2, desktop: 2 }}
      justifyContent={"center"}
      alignItems={"center"}
      width={{
        phone: device.width / 3,
        tablet: device.width / 3,
        web: null,
        desktop: null,
      }}
    >
      <ImageBox
        source={image}
        borderRadius={{ phone: 12, tablet: 12, web: 3, desktop: 3 }}
        borderTopLeftRadius={{
          phone: undefined,
          tablet: undefined,
          web: 12,
          desktop: 12,
        }}
        borderTopRightRadius={{
          phone: undefined,
          tablet: undefined,
          web: 12,
          desktop: 12,
        }}
        width={{
          phone: 80,
          tablet: 50,
          web: 300,
          desktop: 400,
        }}
        height={{
          phone: 80,
          tablet: 50,
          web: 300,
          desktop: 300,
        }}
        flex={{
          phone: undefined,
          tablet: undefined,
          web: 1,
          desktop: 1,
        }}
        resizeMode={"cover"}
      />
    </Box>
  );
};

export default EventImage;
