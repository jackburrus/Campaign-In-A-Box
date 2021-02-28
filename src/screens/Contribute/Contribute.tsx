import React from "react";
import { View as MotiView } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";

import APP_DATA from "../../../APP_DATA";
import ContributeButton from "../../components/DonateButton/ContributeButton";
import Box from "../../theme/Components/Box";
import Text from "../../theme/Components/Text";
import { device } from "../../constants";

interface ContributeWebProps {}

const Contribute = (props: ContributeWebProps) => {
  return (
    <Box
      backgroundColor={"primary"}
      flex={1}
      // justifyContent={"space-around"}
      alignItems={"center"}
    >
      <SafeAreaView
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          // borderWidth: 1,
        }}
      >
        <Box
          marginBottom={{
            phone: undefined,
            tablet: undefined,
            web: "l",
            desktop: "l",
          }}
        >
          <Text variant={"aboutGiantText"}>Contribute</Text>
        </Box>
      </SafeAreaView>

      <MotiView
        style={{ flex: 3 }}
        from={{ opacity: 0, translateY: 0 }}
        animate={{ opacity: 1, translateY: 50 }}
        transition={{
          type: "timing",
          duration: 1000,

          scale: {
            type: "spring",
          },
        }}
      >
        <Box
          flexDirection={{
            phone: "row",
            tablet: "row",
            web: "row",
            desktop: "row",
          }}
          flexWrap={"wrap"}
          // flex={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {APP_DATA.payments.map((payment, index) => {
            return (
              <ContributeButton
                key={index}
                coin={payment.name}
                qrCode={payment.qrCode}
                address={payment.address}
              />
            );
          })}
        </Box>
      </MotiView>
    </Box>
  );
};

export default Contribute;
