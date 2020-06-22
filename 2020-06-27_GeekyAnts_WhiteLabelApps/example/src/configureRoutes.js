import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {Menu} from "./menu";

export default () => {
  const Stack = createStackNavigator();
  return props => (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
};
