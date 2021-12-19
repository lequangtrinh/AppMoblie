import React from "react";
import { Alert } from "react-native";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,StatusBar,Dimensions
} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {categories ,recipes,DataActivity} from '../data/Data'
const { width, height } = Dimensions.get('window');
import data from '../data/DataApi'
import {dataPost}from '../data/Data'
import postData from '../data/PostData'
const Activity=()=>{
  
    const navigation=useNavigation();
    const number=2;
    const SearchDataName=(id)=>{
        let name=''
        let Arry=[];
       
        Arry=categories;
       for(let i=0;i<Arry.length;i++){
           if(Arry[i].id==id){
               name=Arry[i].name;
           }
       }
       
       return name
    }
    const renderItem =({item})=>{
     
        return(
        <View style={ {marginHorizontal:10,marginTop:20}}>
        <TouchableOpacity onPress={()=>{navigation.navigate("MenuActivity",DataActivity.push(item.recipeId),),Alert.alert(`${item.recipeId}`)}} style={styles.button}>
            <View style={{top:-10}}>
                <Image style={{width:170,height:150,borderTopLeftRadius:10,borderTopRightRadius:10}} source={{uri:item.photo_url}}></Image>
            </View>
            <Text style={{fontSize:17,fontWeight:"bold",color:"#000",textAlign:"center"}}>{item.title}</Text>
            <Text>{SearchDataName(item.categoryId)}</Text>
        </TouchableOpacity>
        </View>
        )
    }
    return(
        <View style={styles.container}>
        <StatusBar style="auto"></StatusBar>
      
        <View style={{width:width,height:50,paddingTop:40,marginBottom:10}}>
            <Text style={{textAlign:"center",fontSize:25,fontWeight:"bold",color:"#000"}}>MENU</Text>
        </View>
        <View style={styles.flatList}>
            <FlatList
            data={recipes}
            numColumns={number}
            renderItem={renderItem}
            keyExtractor={item=>`${item.categoryId}`}
            showsVerticalScrollIndicator={false}
            ></FlatList>
        </View>
      
        </View>
    )
}
export default Activity
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    flatList:{
        flex:1,
        marginTop:10
    },
    button: {
        width:180,
        height:200,
        backgroundColor:'#fff',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
       
      },
})