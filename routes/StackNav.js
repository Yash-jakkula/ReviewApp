import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Middle from "../components/Middle";
import Details from "../components/Details";
import {
    View,Text
} from 'react-native';

const Stack=createNativeStackNavigator();


const StackHome = () =>{
return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Middle' component={Middle}></Stack.Screen>
        <Stack.Screen name='Details' component={Details}></Stack.Screen>
      </Stack.Navigator>
 </NavigationContainer>
)
}

export default StackHome;