import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Login';
import ForgotPass from '../components/ForgotPass';
import SignUp from '../components/SignUp';
import DrawNav from './DrawNav';
import Details from '../components/Details';
import TabNav from './Tab';

const Stack = createStackNavigator();


function StackNav() {
  return (
    <Stack.Navigator>
       <Stack.Screen name='Login'>
        {({ navigation }) => (
          <Login navigation={navigation} />
        )}
        </Stack.Screen>
      <Stack.Screen name='ForgotPass' component={ForgotPass} options={{headerShown: false}}/>
      <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}/>
      <Stack.Screen name='Faculty Profile' component={Details} />
      <Stack.Screen name='DrawNav' component={DrawNav} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default StackNav;