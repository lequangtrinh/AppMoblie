import React, { useState } from 'react'
import { Image, Modal } from 'react-native';
import {View,FlatList, TouchableOpacity,Text,StyleSheet,StatusBar,Alert}from 'react-native'
import LottieView from 'lottie-react-native';
import {LinearGradient} from "expo-linear-gradient";
import { ToastAndroid } from 'react-native';
import Communications from 'react-native-communications';
import { Keyboard } from 'react-native';
import { TextInput } from 'react-native';

const ModalKeyBoard=({modalKey,setModalKey})=>{
    const [value,setValue]=useState('');
    const data=[{
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
    const renderItem=({item})=>{
        return(
            <View style={{ alignItems:"center",marginHorizontal:20,top:20,
            justifyContent:"center"}}>
            <TouchableOpacity style={styles.bnt} 
            onPress={()=>{setValue(value+item.id);
            }}
            >
              <Text style={{textAlign:"center",fontSize:25,color:"#fff"}}>{item.name}</Text>
            </TouchableOpacity>
            </View>
        )
    }
    return(
        <Modal visible={modalKey} transparent >
        
        <View style={styles.container}>
   
         <LinearGradient  colors={['#8350C7', '#454247']}
            start={{x:0, y:1}} end={{x:1, y:0}}
            locations={ [0.1,2]}
            style={{width:"100%",height:"50%"}}
            >
        <View >
        <View >
        <TextInput style={{marginLeft:"85%",fontSize:20,color:"#fff",top:5}} value={value}></TextInput>
        </View>
        <View style={{justifyContent:"center",alignItems:"center"}} >
        <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={3}
        >
        </FlatList>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity style={{width:100,height:100,marginLeft:170,top:30,justifyContent:"center",alignItems:"center"}}
        onPress={()=>{setModalKey(false),ToastAndroid.show("Tắt Key", ToastAndroid.SHORT)}}
        >
        <Text style={{fontSize:20,fontWeight:"bold"}}>ẩn</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
        </LinearGradient>
        </View>
        </Modal>
    )
}
export default ModalKeyBoard
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
        alignContent:"center",
        marginBottom:20    
    },

})