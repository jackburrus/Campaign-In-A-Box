import React from "react";

import Box from "../../theme/Components/Box";
import Text from "../../theme/Components/Text";

interface ErrorScreenProps {}

const ErrorScreen = (props: ErrorScreenProps) => {
  return (
    <Box
      flex={1}
      backgroundColor={"primary"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text variant={"aboutHeaderText"}>An Error Occured</Text>
    </Box>
  );
};

export default ErrorScreen;
