import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import TodoDetails from "./TodoDetails";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="TodoDetails"
          component={TodoDetails}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
  );
};

export default StackNavigator;
