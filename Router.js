import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletedTodo from './CompletedTodo';
import StackNavigator from './StackNavigator';

const Tabs=createBottomTabNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
         <Tabs.Screen options={{headerShown:false}} name="Main" component={StackNavigator}/>
         <Tabs.Screen name="CompletedTodos" component={CompletedTodo}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}


export default Router;
