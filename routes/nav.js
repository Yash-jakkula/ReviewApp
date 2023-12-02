import React from 'react';
import { 
  Text, 
  View, 
  SafeAreaView, 
  StyleSheet, 
  StatusBar,
  ScrollView
 } from 'react-native';
import MenuScreen from './components/Drawer';
import Middle from './components/Middle';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Details from './components/Details';

const Stack=createNativeStackNavigator();
const Draw=createDrawerNavigator();

function StackNav(){
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen
      name = "Middle" 
      component={Middle} 
      options={{ headerShown: false }}
      />
      <Stack.Screen name="Faculty Profile" component={Details} />
    </Stack.Navigator>
  )
}

function DrawNav(){
  return(
    <Draw.Navigator>
      <Draw.Screen name="MenuScreen" component={MenuScreen} />
    </Draw.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
        <StackNav />
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  main:{
    flex:1,
  },
  login:{
  flex:1  
  }
})
