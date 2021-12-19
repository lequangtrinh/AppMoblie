import React, { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  View,Alert, ToastAndroid, ScrollView,TouchableOpacity,TouchableNativeFeedback,TextInput,Text,StatusBar
} from "react-native";
import {idLogin} from '../data/Data'
import { useNavigation } from '@react-navigation/native';
import {firebaseApp} from '../comparent/FirebaseConfig'
import * as ICON from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import { openDatabase } from 'react-native-sqlite-storage'
const Login=()=>  {
  const [errors,setErrors]=useState('')
  const [icon,setIcon]=useState(true);
  const  navigation  = useNavigation();
  const [email, SetEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [image, setImage] = useState(null);
  let count=0;
  useEffect(() => {
  //  getData();
}, []);
const ConnectSQLite=openDatabase({
  name:"newdb.db",
  createFromLocation:1,
  },
  ()=>{ },
  error =>{console.log(error)}
);
  const getData = () => {
    try {
     
      ConnectSQLite.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM Login",
                [],
                (tx, results) => {
                    var len = results.rows.length;
                    if (len > 0) {
                        console.log(results.rows)
                    }
                }
            )
        })
    } catch (error) {
        console.log(error);
    }
}
  const renderData=()=>{
      const todoRef = firebaseApp.database().ref('User');
todoRef.on("value",(data)=>{
  
  if(data.val() == null){
    console.log("tên đăng nhập sai")
  }
  else
  {
  let todo=data.val()
  let TodoList=[];

    for(let id in todo)
    {
      TodoList.push({ id,...todo[id]})
    }
    for(let i=0;i<TodoList.length;i++){
    
     
      if(password.toLowerCase().localeCompare(TodoList[i].password)==0 && (email.toLowerCase().localeCompare(TodoList[i].email)==0)){
        idLogin.push(TodoList[i].email)
        navigation.navigate("Home");
        ToastAndroid.show('Thành công',ToastAndroid.SHORT);
        count=count+1
      }
    }
    if(count==0){
        Alert.alert('Thông báo','Tài Khoản Hoặc Mật Khẩu Sai!!1',[
          {
            text:'Ok',onPress:()=>{navigation.navigate('Login')}
          }
        ])
    }
  }
 })
}
  const handleLogin=()=> {
    // check with backend API or with some static data
    if (email =='') {
      setErrors("email");
    }
    else if (password == '') {
      setErrors("password");
    }
    else
    {
     renderData();
  }
}
    const hasErrors = key => (errors==key ? styles.hasErrors : null);
    return (
      <View style={styles.login} >
      <ScrollView>
      <StatusBar  style="auto"></StatusBar>
      <TouchableNativeFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={{width:"100%",height:"100%"}}>
         <Text style={{fontSize:30,textAlign:"center",marginTop:130,bottom:20}}>Login</Text>
          <View>
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
            <TouchableOpacity onPress={()=>navigation.navigate("ForgotPassWord")} style={{marginLeft:"70%"}}>
            <Text
                style={{ textDecorationLine: "underline",marginTop:10 }}
              >
                Đổi Mật Khẩu?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal:20}}  onPress={()=>{handleLogin()}}>
          <LinearGradient
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={['#D0A9F5', '#50c7c7']}
                style={styles.bnt}
                >
              <Text style={{color:'white',
        fontWeight:'bold',
        fontSize:18}}> Login</Text>  
            </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:20}} onPress={()=>{navigation.navigate("SingUp")}}>
          <LinearGradient
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={['#D0A9F5', '#50c7c7']}
                style={styles.bnt}
                >
              <Text style={{color:'white',
        fontWeight:'bold',
        fontSize:18}}> Sing Up</Text>  
            </LinearGradient>
        </TouchableOpacity>
       
            <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
              <Text
                style={{ textDecorationLine: "underline",textAlign:"center",left:100,marginTop:10,fontSize:15}}
              >
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableNativeFeedback>
        </ScrollView>
    </View>
    );
  }

export default Login
const styles = StyleSheet.create({
  login: {
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
