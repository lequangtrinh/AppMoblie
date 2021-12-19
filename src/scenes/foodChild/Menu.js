import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import { Ionicons }  from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";

const Menu=()=>{
    const [clickPassword,setClickPassword]=useState(false)
    return(
        <View style={{marginTop:40}}>
        <View style={{ flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#000'}}>
     <TextInput 
     secureTextEntry={!clickPassword}
     placeholder="password" style={{flex:1,
    marginTop:5,
    paddingBottom:5,
    color:'gray'}}>

     </TextInput>
     <TouchableOpacity onPress={()=>{setClickPassword(!clickPassword)}}>
     {
         clickPassword ? <Ionicons name="eye-sharp" size={32} color="green"></Ionicons>
        :<Ionicons name="eye-off" size={32} color="green"></Ionicons>
     }
     </TouchableOpacity>
     
        </View>
        </View>
    )
}
export default Menu