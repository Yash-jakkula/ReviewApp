import { createDrawerNavigator,DrawerItemList,DrawerItem,DrawerContentScrollView } from '@react-navigation/drawer';
import Menu from '../components/Menu';
import Settings from '../components/Settings';
import TabNav from './Tab';
import {
    Text,
    View,
    Image
} from 'react-native';
import CustomDrawerContent from '../components/CustomDrawerContent'
import StackNav from './StackNav';

const Draw = createDrawerNavigator();


function DrawNav({route}) {

  const { CustomData } = route.params;
    return (
      <Draw.Navigator drawerContent={props => <CustomDrawerContent {...props} Username={CustomData}/>}>
        <Draw.Screen name='Faculty' component={TabNav} />
        <Draw.Screen name='Menu' component={Menu} />
        <Draw.Screen name = "Settings" component={Settings} />
      </Draw.Navigator>
    );
  }

  export default DrawNav;