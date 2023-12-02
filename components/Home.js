import React from "react";
import data from '../dataFIles/data';
import {
    StyleSheet,
    View,Text, 
    SafeAreaView, 
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { useNavigation,DrawerActions } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuScreen from "./Drawer";
// import courses from "../dataFIles/data";

const Dra = createDrawerNavigator();

const Data = data;
const Home = () => {

const [facultyInfo,setFacultyInfo] = React.useState([]);

React.useEffect(()=>{
 async function fetchData () {
  try{
    console.log("excuting");
  const data = await fetch('http://192.168.0.105:3000/faculty/getFaculty');
  const facultyData = await data.json();
  setFacultyInfo(facultyData);
  }
  catch(err){
    console.log(err+"something went wrong");
  }
 }

 fetchData();
},[])


const username = '21eg105h21@anurag.edu.in'

    const navigation=useNavigation();
    
  function Details(propsData){
        navigation.navigate('Faculty Profile',{ ...propsData });
    }
const Draw = () => {
    navigation.navigate('Drawer');
}

const details = facultyInfo.map((item)=>(
  <View>
  <Text key={item.title} style={styles.title}>{item.title}</Text>
  <ScrollView horizontal={true}>
        <View style={styles.wrapper}>
          {item.faculty.map((name) => (
            <TouchableOpacity style={styles.card} onPress={
              () => Details(
                {para1:name.id,para2:name.name,
                para3:name.experience,para4:name.profile,
                info:name.basicInfo})}>
            <View key={name.id} style={styles.faculty}>
              <View style={styles.imgContainer}>
                    <Image 
                    style={styles.profile}
                    source={
                        name.profile === 'f' ?
                        require('./female.jpg')
                        :
                        require('./Male.jpg')
                    }   
                />
               </View>
              <View style={styles.textContainer}>
              <Text>{name.facultyName}</Text>
              <Text>{name.experience}</Text>
              </View>
            </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
  </View>
));

    return (
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.Middle}>
        <ScrollView vertical={true}>

        <View>{details}</View>
        
        </ScrollView>
        </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
      },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        color:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    flatList:{
        fontSize:25,
        paddingLeft:10
    },
    header:{
        fontSize:30,
        backgroundColor:'gray'
    },
    SectionHeader:{
        marginBottom:5
    },
    faculty:{
        flex:1,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        width:150
    },
    wrapper:{
        flexDirection:'row',
        justifyContent:'space-around',
        maxHeight: 150,
        marginLeft:20
      },
      title:{
        fontSize:20,
        margin:20,
        fontWeight:'bold',
      },
      profile:{
        height:70,
        width:70,
        borderRadius:50
      },
      Top:{
        margin:15,
        flex:1,
        flexDirection:"row",
        alignItems:'center',
        marginRight:130
      },
      MenuIcon:{
        width:30,
        height:30,
      },
      profilePic:{
        width:40,
        height:40,
        borderRadius:50
      },
      Username:{
        width:70,
        height:20,
      },
      TopRight:{
        flexDirection:"row",
        alignItems:'center'
      },
      card:{
        backgroundColor:'pink',
        width:150,
        flex:1,
        flexWrap:'wrap',
        height:150,
        marginRight:10,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center'
      },
      imgContainer:{
       marginBottom:15,
       borderRadius:50      
      },
      textContainer:{

      }
   
})

export default Home;