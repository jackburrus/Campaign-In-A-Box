import { createBox } from "@shopify/restyle";
import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Resizable } from "react-native-web-hooks";

import IssueCard from "../../components/Issue/IssueCard";
import device from "../../constants/device";
import { listIssues } from "../../graphql/queries";
import Box from "../../theme/Components/Box";
import { PressableBox } from "../../theme/Components/PressableBox";
import Text from "../../theme/Components/Text";
import { Theme } from "../../theme/Themes/Theme";

interface IssuesWebProps {}

const CustomFlatList = createBox<Theme, React.ComponentProps<typeof FlatList>>(
  FlatList
);

const Issues = ({ navigation }) => {
  const [issueData, setIssueData] = useState([]);

  const getIssueData = async () => {
    const data = await API.graphql(graphqlOperation(listIssues));

    setIssueData(data.data.listIssues.items);
  };

  useEffect(() => {
    getIssueData();
  }, []);

  interface ItemPropTypes {
    category: string;
    position: string;
    image: string;
  }

  type RenderItem<T> = FlatList<T>["props"]["renderItem"];

  return (
    <Box
      backgroundColor={"primary"}
      flex={1}
      justifyContent={"center"}
      paddingTop={"l"}
      alignItems={"center"}
    >
      <SafeAreaView>
        <Box width={device.width} alignItems={"center"}>
          <Text variant={"aboutGiantText"}>Issues</Text>
        </Box>
      </SafeAreaView>
      <Resizable>
        {(layout) => {
          return layout.width > 1300 ? (
            <CustomFlatList<RenderItem>
              data={issueData}
              key={"_"}
              numColumns={3}
              columnWrapperStyle={{
                width: device.width - 300,
                justifyContent: "space-around",
                marginBottom: 100,
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }: { item: ItemPropTypes }) => (
                <PressableBox
                  onPress={() =>
                    navigation.navigate("IssueDetailsScreen", { item })
                  }
                >
                  <IssueCard
                    category={item.category}
                    body={item.position}
                    image={{ uri: item.image }}
                  />
                </PressableBox>
              )}
            />
          ) : (
            <CustomFlatList<RenderItem>
              data={issueData}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              // style={{ borderWidth: 1 }}
              keyExtractor={(item, index) => index.toString()}
              key={"#"}
              numColumns={2}
              renderItem={({ item }: { item: ItemPropTypes }) => {
                return (
                  <PressableBox
                    onPress={() => {
                      navigation.navigate("IssueDetailsScreen", { item });
                    }}
                  >
                    <IssueCard
                      category={item.category}
                      body={item.position}
                      image={{ uri: item.image }}
                    />
                  </PressableBox>
                );
              }}
            />
          );
        }}
      </Resizable>
    </Box>
  );
};

export default Issues;
