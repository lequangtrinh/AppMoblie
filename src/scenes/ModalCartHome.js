import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {View,Text,Modal,StyleSheet,Animated,Dimensions,Image}from 'react-native';
import * as ICON from '@expo/vector-icons';
import { Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {LinearGradient} from "expo-linear-gradient";
import {dataModalCart,ShopCart}from '../data/Data'
import { shuffle } from 'lodash';
 const ModalHomeCart=({visibleModal,setVisibleModal,count})=>{
   
    const {height}=Dimensions.get("window")
     const [animation,setAnimation]=useState(new Animated.Value(0))
     const [data,setData]=useState(dataModalCart);
     const [dataNew,setDataNew]=useState();
     let dem=0;
     const onclickCart=(item)=>{
       
        for(let i=0;i<dataModalCart.length;i++){
            if(dataModalCart[i]==item){
               
               dataModalCart.splice(i,1);
              setData(dataModalCart);
             console.log(dataModalCart[i])
              FlaList();
             
            }
            console.log(ShopCart)
        }
     }
     useEffect(()=>{
      
     })
const renderItem=({item})=>{
  console.log(item)
    if(count==0){
        return(
            <View style={{marginTop:"60%"}}>
                <Text style={{textAlign:"center",fontSize:25,color:"#000",justifyContent:"center",alignContent:"center"}}>Không Có Đơn Hàng Nào</Text>
            </View>
        )
    }
    else{
       
       // ShopCart.push(item.count)
       
        return(
            <LinearGradient  colors={['#F8E0F1', '#E6E6E6']}
            start={{x:0, y:1}} end={{x:1, y:0}}
            locations={ [0.1, 0.9]}
            style={styles.item}>
            <View 
            style={{width:"97%",height:90,flexDirection:"row",marginHorizontal:10,marginTop:10, justifyContent:"center",alignContent:"center"}}>
              <View style={styles.img}>
                  <Image style={{width:"100%",height:80}}
                  source={item.img}></Image>
              </View>
              <View style={{width:"70%",height:60,left:15}}>
                  <Text style={{fontWeight:"bold",fontSize:20}}>
                 {item.name}
                  </Text>
                  <Text style={{fontSize:17}}>
                    {item.count}
                  </Text>
                  <Text style={{fontSize:17}}>{item.price *item.count}$</Text>
              </View>
              <TouchableOpacity style={styles.icon} 
              onPress={()=>
              {
                  onclickCart(item)
              }}>
              <Image 
              style={{width:25,height:25,alignItems:"center",justifyContent:"center",right:5}} source={require("../img/icon/delete.png")}></Image>
              </TouchableOpacity>
          </View>
          </LinearGradient>
        )
    }
}
const opeModal=animation.interpolate({
    inputRange:[0,1],
    outputRange:[1,0],
    extrapolate:"clamp"
});
const SaveModal=animation.interpolate({
    inputRange:[1,2],
    outputRange:[0,-height],
    extrapolate:"clamp"
});
const FlaList=()=>{
  //  ShopCart.splice(0,ShopCart.length)
    return(
    <FlatList data={data}
    renderItem={renderItem}
    showsVerticalScrollIndicator={false}
    >
    </FlatList>
    )
}
const CloseModal=()=>{
    Animated.timing(animation,{
      toValue:1,
      duration:500,
      useNativeDriver:false
    }).start();
  }
     return(
            
             <Modal transparent  visible={visibleModal}
             style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>
             
             <Animated.View style={{transform:[{scale:opeModal},{translateY:SaveModal}]}}>
             
                 <View style={styles.modals}>
                 <LinearGradient  colors={['#6E6E6E', '#fff']}
            start={{x:0, y:1}} end={{x:1, y:0}}
            locations={ [0.1, 0.9]}
            style={styles.item}>
                 <TouchableOpacity style={{width:30,height:30,left:4}} onPress={()=>{CloseModal,setVisibleModal(false)}}>
                 <ICON.Ionicons name="md-return-up-back-outline" size={30}></ICON.Ionicons>
                 </TouchableOpacity>
                     <Text style={{fontSize:25,textAlign:"center",fontWeight:"bold"}}>Đơn Hàng</Text>
                    
                {FlaList()}
                 </LinearGradient>
                 </View>
                 </Animated.View>
             </Modal>
      
     )
 }
 export default ModalHomeCart
 const styles=StyleSheet.create({
     container:{
         flex:1,
        
     },
     modals:{
         top:30,
         width:"90%",
         height:"96%",
         marginHorizontal:20,
         borderRadius:20,
        
     },
     flatList:{
         flex:1
     },
     img:{
         width:"25%",
         height:60,
     },
     icon:{
       
        top:20,
        width:30,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center"

     },
     item: {
        flex:1,
        marginTop:10,
        marginBottom:5,
        marginHorizontal:10,
        borderRadius:10,
        marginBottom:10
      
      },
 })