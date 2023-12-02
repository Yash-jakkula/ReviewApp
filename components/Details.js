import {React , useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    Button,
} from 'react-native';
import { useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native-gesture-handler";

function Details(){
    const route=useRoute();
    const {para1,para2,para3,para4,info} = route.params;
    const [color,changeColor] = useState('gray');
    const [Vote,UpdateVote] = useState('vote');

    const Heart= () => {
       color == 'gray' ? changeColor('red') : changeColor('gray');
    }

    const toggleVote = () => {
        Vote == 'Devote' ? UpdateVote('vote') : UpdateVote('Devote');
    }

return(
    <SafeAreaView style={styles.screen}>
        <View>
    <View style={styles.containers}>

        <View style={styles.imageContainer}>
            <Image
            style={styles.profile} 
            source={para4 === 'f' ?
                require('./female.jpg'):
                require('./Male.jpg')
            }
            />
        </View>

        <View style={styles.textContainer}>
        <Text style={styles.text}>{para2}</Text>
        <Text style={[styles.text]}>{para3}</Text>
        </View>

    </View>

    <View style={styles.info}>
        <Text style={[styles.InfoText,styles.Heading]}>Info</Text>
        <Text style={styles.InfoText}>
            {info}
        </Text>
    </View>

    <View style={styles.footer}> 

            <View style={styles.icon}>
                <Icon onPress={Heart} name="heart" size={40} color= {color} />
            </View>
            

            <TouchableOpacity onPress={toggleVote} style={styles.Vote}>
                <Text style={styles.VoteText}>{Vote}</Text>
            </TouchableOpacity>

            <View style={styles.comments}>
                <Icon name="comment" size={30} color='gray' />
            </View>

    </View>

    </View>
    </SafeAreaView>
)
}

const styles=StyleSheet.create({
    screen:{
    flex: 1,
    borderWidth: 2,
    borderColor: 'gray',
    },
    containers:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        height:100,
        width:400,
        margin:50,
        backgroundColor:'red'
    },
    imageContainer:{
        height:100,
        width:100,
        marginRight:20
    },
    profile:{
        height:100,
        width:100,
        borderRadius:50,
    },
    info:{
        marginTop:60,
        padding:20,
       
    },
    textContainer:{
        height:100,
        width:300,
        justifyContent:'flex-end'
        
    },
    text:{
        fontSize:20,
    },
    InfoText:{
        fontSize:30
    },
    Heading:{
        color:'red',
        fontWeight:'bold'
    },
    footer: {
        marginTop: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
      },
    icon:{
        marginHorizontal:10
    },
    comments:{
        marginHorizontal:10
    },
    Vote:{
        backgroundColor:'blue',
        padding:10,
        width:100,
        alignItems:'center',
        borderRadius:10
    },
    VoteText:{
        fontSize:20,
        color:'white'
    }
    


})

export default Details;