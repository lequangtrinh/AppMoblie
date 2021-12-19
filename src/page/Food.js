import React, { useState } from "react";
import { Dimensions } from "react-native";
import { Alert } from "react-native";
import { TextInput } from "react-native";
import { StatusBar } from "react-native";
import {
    View,
    Text,
    Image,
    TouchableOpacity,TouchableNativeFeedback
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {Linking, SMS, Permissions } from 'expo';
import Communications from 'react-native-communications';
import {CallOTP}from './Index'
const {width,height}=Dimensions.get("window")
const Food=()=>{
    const navigation = useNavigation();
    const [modal,setModal]=useState(false)
   
    const [ValueOTP,setValueOTP]=useState('')
    const LoadCall=async()=>{
        await Permissions.askAsync(Permissions.Linking);
    }
    const LoadSMS= async()=>{
        await Permissions.askAsync(Permissions.SMS);
    }
    const RenderCall=async()=>{
        LoadCall();
        let result = await Linking.openURL('tel:0354709903');
    }
    const RenderSMS=async()=>{
        await LoadSMS();
        let result = await SMS.sendSMSAsync(['0354709903'],'324324');
    }
    return(
        <View style={{flex:1,backgroundColor:"#50C7C7"}}>
        <TouchableWithoutFeedback
        onPress={()=>{Keyboard.dismiss()}}>
       
      
       <View style={{marginHorizontal:18}}>
           <Text style={{marginTop:20,fontSize:50,color:"#fff"}}>Help !</Text>
           <Text style={{marginTop:80,fontSize:25,color:"#fff"}}>Welcome</Text>
           <Text style={{marginTop:5,fontSize:20,color:"#fff"}}>Enter your mobile number to continue</Text>
           <View style={{width:width-100,height:50,backgroundColor:'#fff',marginTop:15}}>
               <TextInput placeholder="OTP" style={{fontSize:25,padding:10}}
               onChangeText={text=>{setValueOTP(text)
              }}
               keyboardType="number-pad"
           value={ValueOTP}
               >
               </TextInput>
           </View>
       </View>
       <TouchableOpacity style={{marginTop:"30%",borderRadius:20,left:80,justifyContent:"center",alignItems:"center",width:250,height:60,backgroundColor:"#fff6"}} onPress={()=>{
          setModal(!modal)
       }}>
           <Text style={{color:"#fff",fontSize:22,textAlign:"center"}}> Gửi Mã OTP </Text>
       </TouchableOpacity>
       <View style={{marginTop:"60%"}}>
       <View style={{height:90,backgroundColor:"#fff",bottom:5,alignContent:"space-around",flexDirection:'row',alignItems:"center"}}>
       <TouchableOpacity style={{justifyContent:"center",backgroundColor:"#2166b0",width:width/3,height:60,marginHorizontal:28,borderRadius:10}}>
           <Text style={{color:"#fff",fontSize:16,textAlign:"center"}}>Facebook</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{justifyContent:"center",backgroundColor:"#D3D3D3",width:width/3,height:60,marginHorizontal:48,borderRadius:10}}>
           <Text style={{color:"#fff",fontSize:16,textAlign:"center"}}>Google</Text>
       </TouchableOpacity>
       </View>
       </View>
       <CallOTP modal={modal} setModal={setModal} router={ValueOTP}></CallOTP>
       </TouchableWithoutFeedback>
        </View>
    )
}
export default Food