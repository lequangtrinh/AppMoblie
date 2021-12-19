import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import {
  Alert,
  Keyboard,
  TouchableOpacity,
  StyleSheet,TextInput,
  View,Text,TouchableNativeFeedback
} from "react-native";
import {firebaseApp} from '../comparent/FirebaseConfig'
import { useNavigation } from '@react-navigation/native';
import * as ICON from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const  Forgot=()=> {
const [errors,setErrors]=useState('')
const  navigation  = useNavigation();
const [email, SetEmail ] = useState('');
const [dataSource,setDataSource]= useState('');
let count=0;
const renderData =()=>{
  const todoRef = firebaseApp.database().ref('User');
  todoRef.on("value",(data)=>{
    var key=Object.keys(data.val());
    for(let i=0;i<key.length;i++)
    {
        const todo = firebaseApp.database().ref('User/'+`${key[i]}`).child('email');
          todo.on("value",(data1)=>{
            if(data1.val()=== null)
            {

            }
            else if((data1.val().localeCompare(email)) ==0)
            {
              firebaseApp.database().ref('User/'+`${key[i]}`).update({
                password:123456,
               
              });
              count=count+1
              console.log(email)
            }
          });    
    }
  });
  if(count == 1){
    console.log(count)
    navigation.navigate("Login");
    SetEmail('');
  count=count - 1;
  console.log(count)
  }
  else{
    Alert.alert('Thông báo','Tên đăng nhập sai',[
      {
        text:'Ok',onPress:()=>{navigation.navigate('Forgot')}
      }
    ])
  }
 }
 
  const handleForgot=()=> {
    if (email == '') {
      setErrors("email");
    }
    else{
      renderData();
    }
  }
    const hasErrors = key => (errors==key ? styles.hasErrors : null);
    return (
      <View style={styles.forgot}>
      <StatusBar style="auto"></StatusBar>
   <TouchableNativeFeedback onPress={()=>Keyboard.dismiss()}>
        <View>
        <View>
        <Text style={{fontSize:30,textAlign:"center",top:-70}}>XÁC NHẬN MẬT KHẨU</Text>
        <View>
        <ICON.MaterialCommunityIcons name="email-check-outline" color="#acb5b5" style={styles.Icon} size={24}></ICON.MaterialCommunityIcons>
          <TextInput 
    placeholder="Email" 
    errors={hasErrors("email")}
    style={[styles.input,hasErrors("email")]}
    defaultValue={email}
    onChangeText={text=> SetEmail(text.toLowerCase())}
    ></TextInput>
    </View>
    <View style={{marginHorizontal:20}}>
    <TouchableOpacity  onPress={()=>{handleForgot()}}>
    <LinearGradient
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 0}} 
            colors={['#D0A9F5', '#50c7c7']}
            style={styles.bnt}
            >
           <Text style={{color:'white',
    fontWeight:'bold',
    fontSize:18}}>Forgot</Text>
              
            </LinearGradient>
    </TouchableOpacity>
    <TouchableOpacity  onPress={()=>{navigation.navigate("Login")}}>
    <LinearGradient
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 0}} 
            colors={['#D0A9F5', '#50c7c7']}
            style={styles.bnt}
            >
           <Text style={{color:'white',
    fontWeight:'bold',
    fontSize:18}}> Back to Login</Text>
              
            </LinearGradient>
    </TouchableOpacity>
    </View>
    </View>
        </View>
        </TouchableNativeFeedback>
      </View>
    );
  }


const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    paddingLeft:35,
    marginHorizontal:30,
    width:350,
    height:50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C5CCD6",
  },
  bnt:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    paddingVertical:10,
    height:50,
    borderRadius:20
},
Icon:{
  position: "absolute",
  alignItems: "flex-end",
  left: 37,
  top:13
},
  hasErrors: {
    borderColor: "#F3534A"
  }
});
export default Forgot