
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { View,Text, Modal,StyleSheet,TouchableOpacity,Image ,FlatList,StatusBar, TouchableNativeFeedback} from 'react-native';
import icons from '../constants/icons';
const modal=({visibleModal,sdetVisibleModal,route})=>{
   
    let data=[];
    data.push(route);
    const renderItem=({item})=>{
        return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5,marginHorizontal:10}}>
        {
           item.map((item1,key)=>{
           
               return(
                   <View style={{width:70,height:79,marginTop:10,borderRadius:10,marginHorizontal:10,justifyContent:'center',alignItems:'center',alignContent:"center"}}>
                   <TouchableOpacity onPress={()=>{Alert.alert(`${item1.name}`)}}>
                   <Image style={{width:55,height:50,marginTop:5}} source={item1.icon}></Image>
                   <Text style={{color:"#000",textAlign:"center",top:5}}>{item1.name}</Text>
                   </TouchableOpacity>
                   </View>
               )
           }) 
        }
        </View>
        )
    }
    const [Number,setNumber]=useState(4);
    return(
        <Modal transparent visible={visibleModal}>
        <TouchableNativeFeedback onPress={()=>setVisibleModal(false)}>
            <View style={styles.viewBackModal}>
                <View style={styles.viewModal}>
                  <FlatList
                  data={data}
                  numColumns={Number}
                  renderItem={renderItem}
                  keyExtractor={item=>`${item.id}`}>
                  </FlatList>
                </View>
            </View>
            </TouchableNativeFeedback>
        </Modal>
    )
}
export default modal
const styles =StyleSheet.create({
viewBackModal:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
viewModal:{
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    display:'flex',
    width:350,
    height:120,
    marginTop:'-30%',
    backgroundColor:"#fff",
    marginHorizontal:'13%',
    shadowColor: "#000",
    borderRadius: 20,
    shadowOffset: {
        width: 0,
        height: 18,
    },
    shadowOpacity: 0.5,
    },
})