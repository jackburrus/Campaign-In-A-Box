import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { navigationOptions } from "../constants/navigation";
import IssueDetailsScreen from "../screens/Issues/IssueDetailsScreen";
import Issues from "../screens/Issues/Issues";

const IssueNavigator = createStackNavigator();

const IssueStackNavigator = () => {
  return (
    <IssueNavigator.Navigator {...navigationOptions}>
      <IssueNavigator.Screen component={Issues} name={"IssuesWeb"} />
      <IssueNavigator.Screen
        component={IssueDetailsScreen}
        name={"IssueDetailsScreen"}
      />
    </IssueNavigator.Navigator>
  );
};

export default IssueStackNavigator;
