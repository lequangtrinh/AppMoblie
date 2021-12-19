import React, { useState } from 'react'
import { Image, Modal } from 'react-native';
import {View,FlatList, TouchableOpacity,Text,StyleSheet,StatusBar,Alert,TextInput}from 'react-native'
import LottieView from 'lottie-react-native';
import {LinearGradient} from "expo-linear-gradient";
import { ToastAndroid } from 'react-native';
import ModalKeyBoard from './ModalKeyBoard'
import {useNavigation} from '@react-navigation/native'
const CallOTP=({modal,setModal,router})=>{
    const [modalKey,setModalKey]=useState(false)
    const [valueKey,setValueKey]=useState(true)
    const [value,setValue]=useState(0)
    const [valueKeyBoar,setKeyBoar]=useState('');
    const [valueText,setValeText]=useState('Đang gọi')
    const navigation=useNavigation();
    const data=[{
        id:1,
        name:"Ghi âm",
        img1:require('../img/icon/phone-record.png'),
     },
        {
        id:2,
        name:"Danh bạ",
        img1:require('../img/icon/user.png'),
        
    },
        {
        id:3,
        name:"Thêm",
        img1:require('../img/icon/insert.png'),
        },
        {
        id:4,
        name:"Im lặng",
        img1:require('../img/icon/imlang.png'),
        }
        ,{
        id:5,
        name:"Loa",
        img1:require('../img/icon/mute.png'), 
        }
    ,{
        id:6,
        name:"Bàn Phím",
        img1:require('../img/icon/keyboard.png'),
        }
    ];
    const dataKey=[{
        id:1,
        name:"1",
     },
        {
        id:2,
        name:"2",
        
        
    },
        {
        id:3,
        name:"3",
     
        },
        {
        id:4,
        name:"4",
        
        }
        ,{
        id:5,
        name:"5",
      
        }
    ,{
        id:6,
        name:"6",
        
        }
    ,{
        id:7,
        name:"7",
        
        }
    ,{
        id:8,
        name:"8",
        
        }
        ,{
            id:9,
            name:"9",
          
            }
        ,{
            id:10,
            name:"*",
            
            }
        ,{
            id:11,
            name:"0",
            
            }
        ,{
            id:12,
            name:"#",
            
            }
    ];
    const rederItemKey=({item})=>{
        return(
            <View style={{ alignItems:"center",marginHorizontal:20,
            justifyContent:"center"}}>
            <TouchableOpacity style={[styles.bntKey]} 
            onPress={()=>{setKeyBoar(valueKeyBoar+item.name)
            }}
            >
            <Text style={{textAlign:"center",fontSize:25,color:"#fff"}}>{item.name}</Text>
            </TouchableOpacity>
            </View>
        )
    }
    const renderItem=({item})=>{
          if(item.id==1 || item.id==3){
              return(
            <View style={{ alignItems:"center",marginHorizontal:20,
            justifyContent:"center"}}>
            <TouchableOpacity style={styles.bnt1}
            >
                <Image style={styles.img} source={item.img1}></Image>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontSize:15,color:"#adb8b8",marginBottom:15,}}>{item.name}</Text>
            </View> 
              )
          }
           else{
               return(
          <View style={{ alignItems:"center",marginHorizontal:20,
            justifyContent:"center"}}>
            <TouchableOpacity style={[styles.bnt,item.id==value?styles.bntFocus:styles.bnt]} 
            onPress={()=>{setValue(item.id);
            if(item.id == 6){
                setValueKey(false)
            }
            else if(item.id==2){
                navigation.navigate("PhoneBook");
            }
            }}
            >
                <Image style={styles.img} source={item.img1}></Image>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontSize:15,color:"#fff",marginBottom:15,}}>{item.name}</Text>
            </View> 
               )}
            
        
    }
    return(
        <Modal visible={modal}>
        
        <View style={styles.container}>
   
         <LinearGradient  colors={['#5081c7', '#0a55bf']}
            start={{x:0, y:1}} end={{x:1, y:0}}
            locations={ [0.1, 0.8]}
            style={{width:"100%",height:"100%"}}
            >
             <StatusBar style="auto"></StatusBar>
        <View >
        <View style={{top:100}}>
        <Text style={{textAlign:"center",fontSize:30,color:"#fff",bottom:5}}>{router}</Text>
        <TouchableOpacity >
        <Text style={{textAlign:"center",fontSize:17,color:"#fff"}}>{valueText}</Text>
        </TouchableOpacity>
        </View>
        {
            valueKey?<View style={{marginTop:"60%",alignItems:"center"}}><FlatList
        data={data}
        renderItem={renderItem}
        numColumns={3}
        >
        </FlatList></View>:<View style={{marginTop:"40%",alignItems:"center"}}>
        <TextInput style={{marginLeft:"83%",fontSize:20,color:"#fff",top:5}} value={valueKeyBoar}></TextInput>
                <FlatList data={dataKey}
                renderItem={rederItemKey}
                numColumns={3}
                >
                </FlatList>
                <TouchableOpacity style={{width:100,marginLeft:170,top:70,justifyContent:"center",alignItems:"center"}}
        onPress={()=>{setValueKey(true),ToastAndroid.show("Tắt Key", ToastAndroid.SHORT)}}
        >
        <Text style={{fontSize:20,fontWeight:"bold"}}>ẩn</Text>
        </TouchableOpacity>
                </View>
        }
        
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity style={{width:100,height:100,top:20,justifyContent:"center",alignItems:"center"}}
        onPress={()=>{setModal(false),ToastAndroid.show("Kết thúc cuộc gọi", ToastAndroid.SHORT)}}
        >
       <LottieView source={require('../img/icon/phone-call-red.json')} autoPlay loop />
        </TouchableOpacity>
        </View>
        </View>
       
      
        </LinearGradient>
        </View>
        <ModalKeyBoard modalKey={modalKey} setModalKey={setModalKey}></ModalKeyBoard>
        </Modal>
        
    )
}
export default CallOTP
const styles=StyleSheet.create({
    container:{
        flex:1,
           
        alignItems:"center",
        justifyContent:"center"
    },
    bnt:{
        width:60,
        height:60,
        borderRadius:30,
        borderWidth:1,
        borderColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20    ,
       
    },
    bnt1:{
        width:60,
        height:60,
        borderRadius:30,
        borderWidth:1,
        borderColor:"#adb8b8",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20    ,
       
    },
    bntKey:{
        width:60,
        height:60,
        borderRadius:30,
        borderWidth:1,
        borderColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:15   ,
    },
    bntFocus:{
        width:60,
        height:60,
        borderRadius:30,
        borderWidth:1,
        borderColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
        marginBottom:20   
    },
    img:{

        width:30,height:30,
      
    }
})