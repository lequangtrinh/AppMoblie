import React, { Component, useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  View,Alert, ToastAndroid,Text,TextInput,TouchableNativeFeedback, TouchableOpacity
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import {firebaseApp} from '../comparent/FirebaseConfig'
import * as ICON from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import { ScrollView } from "react-native";
const ForgotPassWord=()=>  {
    const [icon,setIcon]=useState(true);
    const [icon1,setIcon1]=useState(true);
    const [errors,setErrors]=useState('');
    const [email, SetEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const navigation=useNavigation();
    const [passwordNew, setPasswordNew ] = useState('');
    const ckeckForgot=()=>{
        if(email==''){
            setErrors("email");
        }
        else if(password==''){
            setErrors("password")
        }
        else if(passwordNew==''){
            setErrors("PasswordNew")
        }
        else{
            navigation.navigate("Login")
        }
    }
    const hasErrors = key => (errors==key ? styles.hasErrors : null);
    return (
    <View style={styles.container}>
    <ScrollView>
     <StatusBar style="auto"></StatusBar>
     <TouchableNativeFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={{marginHorizontal:20,paddingBottom:20,height:"100%"}}>
    <View style={{justifyContent:"flex-end",paddingHorizontal:30,marginTop:"40%",paddingBottom:"10%"}}>
    <Text style={{fontSize:30,justifyContent:"center",textAlign:"center"}} >ĐỔI MẬT KHẨU</Text>
    </View>
    <View>
    <View>
    <ICON.MaterialCommunityIcons name="email-check-outline" color="black" style={styles.Icon} size={24}></ICON.MaterialCommunityIcons>
    <TextInput 
    placeholder="Email" 
    errors={hasErrors("email")}
    style={[styles.TxTInput,hasErrors("email")]}
    defaultValue={email}
    onChangeText={text=> SetEmail(text)}
    ></TextInput>
    </View>
    <View>
    <ICON.MaterialCommunityIcons name="key-outline" color="black" style={styles.Icon} size={24}></ICON.MaterialCommunityIcons>
        <TextInput placeholder="Password"
         secureTextEntry={icon}
         error={hasErrors("password")}
         defaultValue={password}
         style={[styles.TxTInput,hasErrors("password")]}
         onChangeText={text =>setPassword(text)}
         ></TextInput>
      <TouchableOpacity style={styles.IconEye} onPress={()=>{setIcon(!icon),Alert.alert("ưqd")}}>
        {
        !icon?<ICON.Ionicons name="eye" color="black" size={24}></ICON.Ionicons>:<ICON.Ionicons name="eye-off" color="black" size={24}></ICON.Ionicons> 
        }
    </TouchableOpacity> 
    </View>
    <View>
    <ICON.MaterialCommunityIcons name="key-outline" color="black" style={styles.Icon} size={24}></ICON.MaterialCommunityIcons>
        <TextInput placeholder="PasswordNew"
        secureTextEntry={icon1}
         error={hasErrors("passwordNew")}
         defaultValue={password}
         style={[styles.TxTInput,hasErrors("password")]}
         onChangeText={text =>setPassword(text)}
         ></TextInput>
      <TouchableOpacity style={styles.IconEye} onPress={()=>{setIcon1(!icon1),Alert.alert("123")}}>
        {
        !icon1?<ICON.Ionicons name="eye" color="black" size={24}></ICON.Ionicons>:<ICON.Ionicons name="eye-off" color="black" size={24}></ICON.Ionicons> 
        }
    </TouchableOpacity> 
    </View>
    <View>
    <TouchableOpacity  onPress={()=>{ckeckForgot()}}>
    <LinearGradient
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 0}} 
            colors={['#D0A9F5', '#50c7c7']}
            style={styles.bnt}
            >
           <Text style={{color:'white',
    fontWeight:'bold',
    fontSize:18}}>Đồng Ý</Text>
              
            </LinearGradient>
    </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity  onPress={()=>{navigation.goBack()}}>
    <LinearGradient
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 0}} 
            colors={['#D0A9F5', '#50c7c7']}
            style={styles.bnt}
            >
           <Text style={{color:'white',
    fontWeight:'bold',
    fontSize:18}}>Quay Về</Text>
              
            </LinearGradient>
    </TouchableOpacity>
    </View>
    </View>
    </View>
    </TouchableNativeFeedback>
    </ScrollView>
    </View>
    )
}
export default ForgotPassWord
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'},
    TxTInput:{
        borderBottomWidth:1,borderBottomColor:"#100202",width:"100%",height:50,
        paddingLeft:30,
        paddingTop:10,
       marginTop:20
    },
    IconEye:{
        width:25,
        position: "absolute",
        alignItems: "flex-end",
        right: 0,
        top:40
    },
    Icon:{
        position: "absolute",
        alignItems: "flex-end",
        left: 0,
        top:40
    },
    bnt:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        paddingVertical:10,
        height:50,
        borderRadius:20
    },
    hasErrors: {
        borderBottomColor: "#F3534A"
      },
      
})