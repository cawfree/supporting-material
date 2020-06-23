import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {Menu} from "./menu";
import {Font} from "./font";
import {Uri} from "./uri";

export default () => {
  const Stack = createStackNavigator();
  return props => (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Font" component={Font} />
      <Stack.Screen name="Uri" component={Uri} />
    </Stack.Navigator>
  );
};
