import API, { graphqlOperation } from "@aws-amplify/api";
import React, { useEffect, useState } from "react";
import { FlatList, Platform, PlatformColor } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Resizable } from "react-native-web-hooks";
import { NavigationScreenProp } from "react-navigation";
import { View as MotiView } from "moti";

import EventCard from "../../components/EventCard";
import device from "../../constants/device";
import { listEvents } from "../../graphql/queries";
import Box from "../../theme/Components/Box";
import Text from "../../theme/Components/Text";
interface EventsWebProps {
  navigation: NavigationScreenProp<any, any>;
}

const Events = (props: EventsWebProps) => {
  const { navigation } = props;

  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const data = await API.graphql(graphqlOperation(listEvents));

    setEvents(data.data.listEvents.items);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Box
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"primary"}
      paddingTop={"l"}
      width={{
        phone: undefined,
        tablet: undefined,
        web: device.width,
        desktop: device.width,
      }}
    >
      <SafeAreaView>
        <Box width={device.width} alignItems={"center"}>
          <Text variant={"aboutGiantText"}>Events</Text>
        </Box>
      </SafeAreaView>
      <MotiView
        style={{
          alignItems: "center",
          justifyContent: "center",

          flex: 1,
        }}
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "timing",
          duration: 1000,

          scale: {
            type: "spring",
          },
        }}
      >
        <Resizable>
          {(layout) => {
            return layout.width > 1000 ? (
              <FlatList
                key={"_"}
                columnWrapperStyle={{
                  justifyContent: "flex-start",

                  width: device.width,
                  paddingLeft: 200,
                  paddingRight: 200,
                }}
                numColumns={3}
                data={events}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  return (
                    <EventCard
                      title={item.eventName}
                      date={item.date}
                      location={item.location}
                      description={item.description}
                      image={{ uri: item.image }}
                      id={item.id}
                      nav={() => navigation.navigate("EventRegister", { item })}
                    />
                  );
                }}
              />
            ) : (
              <FlatList
                key={"#"}
                numColumns={1}
                data={events}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  return (
                    <EventCard
                      title={item.eventName}
                      date={item.date}
                      location={item.location}
                      description={item.description}
                      image={{ uri: item.image }}
                      id={item.id}
                      nav={() => navigation.navigate("EventRegister", { item })}
                    />
                  );
                }}
              />
            );
          }}
        </Resizable>
      </MotiView>
    </Box>
  );
};

export default Events;
