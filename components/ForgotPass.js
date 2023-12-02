import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPass = () => {
    const navigation = useNavigation();

    function change(){
            navigation.navigate('MenuScreen');
    }
    return(
            <View>
                <Text>forgot password</Text>
                <Button
                onPress={change}
                 title='Click' />
            </View>
    )
}

export default ForgotPass;