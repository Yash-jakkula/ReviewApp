import React from "react";
import {View,Text,StyleSheet,TextInput,Button,SectionList} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Middle from "./Middle";
const Header = () => {
const navigation=useNavigation();
    const change = () => {
        navigation.navigate('Middle')
    }
    // 21eg105h21@anurag.edu.in
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Vote for your faculty</Text>
            <TextInput 
             style={styles.box}
             placeholder="Enter your subject here"
             placeholderTextColor="white"
             underlineColorAndroid="transparent"
             borderColor="white"
             borderWidth={1}
            />
           <Button 
           title='change'
           onPress={change()}
           />

            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'blue',
        height:200,
        alignItems:'center',
        justifyContent:'center',
        gap:10
    },
    text:{
        fontSize:40,
        color:'white'
    },
    box:{
        height:30,
        width:250,
        paddingLeft:10,
        color:'white',
        fontSize:20,
    },
    place:{
        fontSize:20,
        color:'white'
    },
})

export default Header;