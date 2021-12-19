import React, { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  View,Alert, ToastAndroid, ScrollView,TouchableOpacity,TouchableNativeFeedback,TextInput,StatusBar,Text
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {firebaseApp} from '../comparent/FirebaseConfig'
import * as ICON from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
const SingUp=()=>  {
  const avatar_vd = "require('../img/images/avatar-vo-danh.png')";
  const [errors,setErrors]=useState('')
  const [icon,setIcon]=useState(true);
  const  navigation  = useNavigation();
  const [email, SetEmail ] = useState('');
  const [name, SetName ] = useState('');
  const [avatar, SetAvatar ] = useState(avatar_vd);
  const [password, setPassword ] = useState('');
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
              else if((data1.val().localeCompare(email)) == 0)
              {
                
              }
              else{
                const todo = {
                  avatar:"https://cdn.pixabay.com/photo/2019/04/16/12/09/vietnam-4131606__480.jpg",
                  email,
                  name,
                  password, 
                };
                todoRef.push(todo);
                count=count+1
              }
            });    
      }
    });
    if(count == 1){
      console.log(count)
      navigation.navigate("Login");
      ToastAndroid.show('Thành công',ToastAndroid.SHORT);
      SetEmail('');
      setPassword('');
      SetName('');
    count=count - 1;
    console.log(count)
    }
    else{
      Alert.alert('Thông báo','Tên đăng nhập đã tồn tại',[
        {
          text:'Ok',onPress:()=>{navigation.navigate('SingUp')}
        }
      ])
    }
   }
const createSingUp = () => {
   const todoRef = firebaseApp.database().ref('User');
   if (email == '') {
    setErrors("email");
  }
  else if (password == '') {
    setErrors("password");
  }
  else if (name == '') {
    SetName("name");
  }
  else
  {
  renderData();
};
};
    const hasErrors = key => (errors==key ? styles.hasErrors : null);
    return (
      <View style={styles.SingUp} >
      <StatusBar style="auto"></StatusBar>
      <ScrollView>
      <TouchableNativeFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={{width:"100%",height:"100%"}}>
         <Text style={{fontSize:30,textAlign:"center",marginTop:130,bottom:20}} >SingUp</Text>
          <View>
          <Text style={styles.text}>Name</Text>
          <View>
          <ICON.SimpleLineIcons name="user" color="#acb5b5" style={styles.Icon} size={24}></ICON.SimpleLineIcons>
          <TextInput 
          placeholder="Name" 
          error={hasErrors("name")}
              style={[styles.input, hasErrors("name")]}
              defaultValue={name}
              onChangeText={text => SetName(text.toLowerCase())}
        ></TextInput>
          </View>
          <Text style={styles.text}>Email</Text>
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
          <Text style={styles.text}>Password</Text>
          <View>
        
          <ICON.MaterialCommunityIcons name="key-outline" color="#acb5b5" style={styles.Icon} size={24}></ICON.MaterialCommunityIcons>
          <TextInput 
          placeholder="Password" 
          secureTextEntry={icon}
          error={hasErrors("password")}
          style={[styles.input, hasErrors("password")]}
          defaultValue={password}
          onChangeText={text => setPassword(text)}
        ></TextInput>
        <TouchableOpacity style={styles.IconEye} onPress={()=>{setIcon(!icon)}}>
        {
        !icon?<ICON.Ionicons name="eye" color="black" size={24}></ICON.Ionicons>:<ICON.Ionicons name="eye-off" color="black" size={24}></ICON.Ionicons> 
        }
    </TouchableOpacity> 
          </View>
          <TouchableOpacity style={{marginHorizontal:20}}  onPress={()=>{createSingUp()}}>
          <LinearGradient
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={['#D0A9F5', '#50c7c7']}
                style={styles.bnt}
                >
              <Text style={{color:'white',
        fontWeight:'bold',
        fontSize:18}}>create</Text>  
            </LinearGradient>
        </TouchableOpacity>
          </View>
        </View>
       
        </TouchableNativeFeedback>
        </ScrollView>
    </View>
    );
  }

export default SingUp
const styles = StyleSheet.create({
  SingUp: {
    backgroundColor:"#fff",
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
    marginTop:20
  },
  IconEye:{
    width:25,
    position: "absolute",
    alignItems: "flex-end",
    right: 40,
    top:32
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
  top:32
},
text:{
fontSize:17,
left:20,
marginTop:15
},
  hasErrors: {
    borderColor: "#F3534A"
  }
 
});
