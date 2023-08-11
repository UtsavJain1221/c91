import React from 'react';
import {View,StyleSheets,TextInput,Text,SecureHide} from 'react-native';


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        render(){
            return(
                <View style={StyleSheets.container}>
                    <TextInput style={StyleSheets.input}>
                        <Text> UserName </Text>
                         </TextInput>
                    <TextInput style={StyleSheets.create}>
                        <Text> Password </Text>
                        <SecureHide enable : true></SecureHide>
                        </TextInput> 

                </View> 
            )
        } 
        
    }
}
styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    },
    input:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:50,
        marginTop:50,
        marginRight:100,
        marginBottom:100,
        backgroundColor:"blue",
        textColor:"white",
        fontSize:12,

    },
    create:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:50,
        marginTop:100,
        marginRight:100,
        marginBottom:100,
        backgroundColor:"blue",
        textColor:"white",
        fontSize:12,
    }
})