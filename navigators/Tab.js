import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Menu from '../components/Menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';


const Tab = createBottomTabNavigator();

function TabNav() {

  const [focus,setFocused] = useState(false);
  const [mfocus,setMfocus] = useState(false)
  const [name,setna] = useState();
  const tabBarIcon = () => {
    const iconColor = focus.focused ? 'blue' :  'gray';
    if(name == 'home') 
    return <Icon name='home' size={30} color={iconColor} />
  }
  return (
    <Tab.Navigator  screenOptions={
      { tabBarActiveTintColor : 'blue'}
    }>
      <Tab.Screen name="Home" component={Home} options = {{ 
        headerShown:false,
        tabBarIcon : tabBarIcon,
         }}
         listeners={({ navigation, route }) => ({
          focus: () => {
            setFocused(true);
            setMfocus(false);
          },
          blur: () => {
            setFocused(false);
            setna('home');
          },
        })}
         />
      <Tab.Screen name='Menu' component={Menu} 
      options={{headerShown:false,
        tabBarIcon : tabBarIcon,
      }}
      listeners={({ navigation, route }) => ({
       focus: () => {
         setMfocus(true);
         setFocused(false);
       },
       blur: () => {
         setFocused(false);
         setna('menu')
       },
     })}
      />
    </Tab.Navigator>
  );
}

export default TabNav;