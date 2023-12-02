import React from 'react';
import { 
  Text, 
  View, 
  SafeAreaView, 
  StyleSheet, 
  StatusBar,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
 } from 'react-native';
import ForgotPass from './ForgotPass';
import SignUp from './SignUp';


export default function Login({ navigation }) {


const [use,setuse]=React.useState('');
const [pass,setPass]=React.useState('');
const [auth,setAuth] = React.useState([]);
const [users,setUsers] = React.useState();

console.log(users)
function userName(text){
  setuse(text);
}

function passWord(text){
  setPass(text);
}

let usernameValidation=/^[\w\d]+@[\w\d]+\.[\w\d.]+$/i;
let passwordValidation=/^[\w\d]+[!@#$%^&*()_+=]/;



async function content(propsData){

  const studLogin = await fetch('http://192.168.0.105:3000/user/getUsers');
  const loginData = await studLogin.json();
  let res = false;
   const foundUser = loginData.find(item => item.userEmail == use && item.userPassword == pass)
   setUsers(foundUser);

  if(foundUser){
  {usernameValidation.test(use) && passwordValidation.test(pass) ? (
    navigation.navigate('DrawNav',{ CustomData:users.userName})) :
    (
      alert('enter the details correctly!')
    )
  }
}
else{
  alert('enter the username and password');
}
 
}

function ForgotPass(){
  navigation.navigate('ForgotPass');
}

function goSignUp(){
  navigation.navigate('SignUp');
}

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.upper}>
        <Text style={styles.text}>AU FeedBack</Text>
        </View>
        <View style={styles.container}>
        <TextInput
        style={styles.username}
        onChangeText={userName}
        placeholder='userName'
        borderColor='black'
        placeholderTextColor='blue'
        borderWidth={1}
        />
        <TextInput
        style={styles.username}
        placeholder='password'
        onChangeText={passWord}
        borderColor="black"
        borderWidth={1}
        placeholderTextColor='blue'
        />
 
        <Button
        onPress={()=>{content()}}
        style={styles.login}
        title='Login' 
        />

        <TouchableOpacity onPress={ForgotPass}>
          <Text>ForgotPass?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goSignUp}>
          <Text>SignUp</Text>
        </TouchableOpacity>
        </View>
  
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  safeArea: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
  },
  upper:{
    padding:0,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:50,
    color:'red',
    fontStyle:'normal',
    fontWeight:'bold'
  },
  username:{
    width:300,
    margin:10,
    padding:10
  },
  button:{
    width:200,
    height:50,
    justifyContent:'center',
  },

})
