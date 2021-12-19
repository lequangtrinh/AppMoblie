import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,StyleSheet, Alert
} from "react-native"
import { FlatList, TextInput } from "react-native-gesture-handler";
import {firebaseApp}from '../comparent/FirebaseConfig'
import Geolocation from 'react-native-geolocation-service';
const Inbox=()=>{
    const [dataSource,setDataSource]=useState('');
    const [name,setName]=useState('');
    const deleteTodo = (id) => {
      //  console.log(id)
        const todoRef = firebaseApp.database().ref('Category').child(id);
       todoRef.remove();
      };
      const updateTodo = (id) => {
        const todoRef = firebase.database().ref('Category').child();
        todoRef.update({
            name,
         avatar:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
        });
      };
    const renderData=()=>{
        const todoRef =  firebaseApp.database().ref('Category');
        //console.log(todoRef)
        todoRef.on("value",(data)=>{
          let todo=data.val()
          
          let TodoList=[];
         for(let id in todo)
         {
           //  console.log()
          TodoList.push({ id,...todo[id]})
         }
          setDataSource(TodoList);
         
         })
        }
  useEffect(()=>{
    renderData();
  },[])
  const renderItem=({item})=>{
      return(
          <View style={{marginBottom:10,marginTop:10,flex:1,width:"100%",marginHorizontal:10}}>
            <TouchableOpacity onPress={()=>{deleteTodo(`${item.id}`)}}>
            <View style={{width:"60%"}}>
            <Text>{item.name}</Text>
            </View>
            <View style={{width:"30%"}}>
                <Image source={{uri:item.avatar}}></Image>
            </View>
            </TouchableOpacity>
          </View>
      )
  }
    return(
        <View style={styles.login}>
        <StatusBar style="auto"></StatusBar>
        <TextInput
        placeholder="search"
        ></TextInput>
        <View style={{marginTop:30,flex:1,display:"flex"}}>
       <FlatList data={dataSource}
       renderItem={renderItem}
       keyExtractor={item=>`${item.id}`}>
       </FlatList>
        </View>
           
        </View>
    )
}
export default Inbox
const styles = StyleSheet.create({
    login: {
      backgroundColor:"#fff",
      flex: 1,
      justifyContent: "center"
    },
})