import { createDrawerNavigator,DrawerItemList
  ,DrawerItem,
  DrawerContentScrollView 
} from '@react-navigation/drawer';
import {
    Text,
    View,
    Image
} from 'react-native';


const CustomDrawerContent = ( props ) => {

  

    return (
      <DrawerContentScrollView {...props}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <Image
            source={require('./female.jpg')}
            style={{ width: 50, height: 50, borderRadius: 25 }} 
          />
            <View> 
                       <Text style={{ marginLeft: 10 }}>{props.Username}</Text>
                </View>
          
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  export default CustomDrawerContent;