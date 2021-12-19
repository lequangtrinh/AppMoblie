
import React from 'react';
import { Alert } from 'react-native';
import {View,Text,StyleSheet,Dimensions,StatusBar,TouchableOpacity,FlatList,Image} from 'react-native'
import {ingredients}from '../data/Data'
const { width, height } = Dimensions.get('window');
const HomeActivity=()=>{
    const number=3;
    const renderItem=({item})=>{
        return(
            <View style={{width:"27%",height:"28%", marginHorizontal:10,}}>
                <TouchableOpacity onPress={()=>{Alert.alert("123")}} style={styles.bnt}>
                    <Image source={{uri:item.photo_url}} style={{width:"100%",height:"80%"}}></Image>
                    <Text style={{textAlign:"center",color:"#000",fontSize:20,fontWeight:"bold"}}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return(
        <View style={styles.container}>
        <StatusBar style="auto"></StatusBar>
            <View style={{width:width,height:50,marginBottom:20}}>
                <Text style={{textAlign:"center",color:"#000",fontWeight:"bold",fontSize:20,top:40}}>Thành Phần</Text>
            </View>
            <View style={styles.FlatList}>
                <FlatList
                data={ingredients}
                renderItem={renderItem}
                numColumns={number}
                ></FlatList>
            </View>
        </View>
    )
}
export default HomeActivity
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    FlatList:{
        flex:1,
        marginTop:10,
        flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
   
    },
    bnt:{
        width:"100%",
        height:180,
        marginHorizontal:10,
        marginBottom:20,
        backgroundColor:'#fff',
       
        justifyContent:'center',
        alignItems:'center',

    }
})