import React, { useEffect } from 'react';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Alert } from 'react-native';
import {View,Text,StyleSheet,Dimensions,StatusBar,TouchableOpacity,FlatList,Image} from 'react-native'
import {DataActivity,recipes,categories}from '../data/Data'
import * as ICON from "@expo/vector-icons";

const DetailActivity=()=>{
    const count=DataActivity[0];
    const dotWhite=require('../img/images/dotGrey.png');
    const dotGrey=require('../img/images/dot_grey.svg.png');
    let data='';
    let dataCategories='';
    const[defaultRating,setDefaultRating]=useState(1)
    const SearchDataID=()=>{
       let Arry=[];
        Arry=recipes;
       for(let i=0;i<Arry.length;i++){
           
           if(Arry[i].recipeId == count){
               console.log(data)
            data=Arry[i]
           }
       }
       return data.photosArray
    }
    const SearchDataName=()=>{
        let Arry=[];
         Arry=categories;
        
        for(let i=0;i<Arry.length;i++){
            if(Arry[i].id==data.categoryId){
                dataCategories=Arry[i].name
            }
        }
        return dataCategories
     }
    const renderItem=({item})=>{
       
        return(
        <TouchableOpacity style={{width:"100%",height:300,flex:1,alignItems:"center",alignContent:"center"}}>
         <Image style={{width:"100%",height:300}} source={{uri:item}}></Image>
        </TouchableOpacity>  
        )
    }
    return(
        <View style={styles.container}>
        <StatusBar style="auto"></StatusBar>
        <ScrollView>
        <View style={{height:300}}>
            <FlatList 
              horizontal={false}
          showsVerticalScrollIndicator={false}
            data={SearchDataID()}
            renderItem={renderItem}
            ></FlatList>
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap',marginLeft:10,alignItems:"center",justifyContent:"center",marginTop:-40}}>
           {
            
            data.photosArray.map((item,key)=>{
                        return(
                            <TouchableOpacity activeOpacity={0.6} key={item} onPress={()=>setDefaultRating(item)}>
                                <Image style={styles.img}
                                source={item <=defaultRating?dotGrey:dotWhite}
                                >
                                </Image>
                            </TouchableOpacity>
                        )
                    }
                    )
           }
           </View>
           
           <Text style={styles.title}>{data.title}</Text>
           <Text style={styles.titleView}>{SearchDataName()}</Text>
           <View style={{marginTop:50,alignItems:"center",justifyContent:"center"}}>
           <ICON.Ionicons name="time-outline" size={24} style={{top:22,left:-60,marginRight:-20,marginLeft:10}}></ICON.Ionicons>
           <Text style={styles.titleTime}>{data.time} minutes</Text>
           </View>
           <View style={{justifyContent:"center",alignItems:"center",marginTop:15}}>
           <TouchableOpacity style={styles.bnt}>
               <Text style={{textAlign:"center",color:"#00FF7F",}}>View</Text>
           </TouchableOpacity>
           </View>
          
           <Text style={{textAlign:"center",fontSize:15,marginHorizontal:20,marginTop:40,bottom:20}}>{data.description}</Text>
           </ScrollView>
       
        </View>
    )
}
export default DetailActivity
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    img:{
        width:10,
        height:10,
        resizeMode:'cover',
        marginHorizontal:10,
        
    },
    title:{
        fontSize:25,
        color:"#000",
        fontWeight:"bold",
        textAlign:"center",
        top:50
    },
    titleView:{
        fontSize:25,
        color:"#00FF7F",
        fontWeight:"bold",
        textAlign:"center",
        top:60
    },
    titleTime:{
        fontSize:15,
        color:"#000",
        fontWeight:"bold",
        textAlign:"center",
        marginLeft:30
    },
    bnt:{
        width:250,
        height:50,
        justifyContent:"center",
        borderColor:"#00FF7F",
        borderWidth:1,
        borderRadius:30
    }
})