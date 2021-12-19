import React, { useState } from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableNativeFeedback,
  Keyboard
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useNavigation}from '@react-navigation/native'
import { StatusBar } from "expo-status-bar";


const All=()=>{
  const navigation=useNavigation()
  
  const dataAll = [
    {
              id:1,
              name:'nấm kho',
              image: require("../../img/images/namkho.jpg"),
              rating: 3,
              price: "12"
          },
          {
            id:2,
              name:'mít kho',
              image: require("../../img/images/mitkho.jpg"),
              rating: 5,
              price: "15"
          },
          {
            id:3,
              name:'hủ tiếu',
              image: require("../../img/images/hutieu.jpg"),
              rating: 4,
              price: "20"
          },
          {
            id:4,
              name:'cuốn lá lốt',
              image: require("../../img/images/cuonlalot.jpg"),
              rating: 2,
              price: "12"
          },
          {
            id:5,
              name:'salad',
              image: require("../../img/images/cuondiep.jpg"),
              rating: 5,
              price: "13"
          },
  ]
  const [data,setData]=useState(dataAll)
  const [data_temp,setData_temp]=useState(dataAll)
  const [search,setSearch]=useState('')
  const [number,setNumber]=useState('')
  const renderItem = ({item}) => {
    return(
     <View>
     <LinearGradient  colors={['#F8E0F1', '#8cc631']}
        start={{x:0, y:1}} end={{x:1, y:0}}
        locations={ [0.1, 0.9]}
        style={styles.item}>
          <View style={styles.image_container}>
              <Image 
                source={item.image}
                style={styles.image}
              />
          </View>
          <View style={styles.content}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.rating}>
              {renderRating(item.rating)}
              </View>
              <View style={styles.price_container}>
                  <View style={styles.price}>
                      <Text style={styles.textPrice}>{item.price}$</Text>
                  </View>
              </View>
          </View>
          <TouchableOpacity 
          onPress={()=>navigation.navigate("DetailFood",{
            images: item.image,
            price: item.price,
            name: item.name
          })}
          style={styles.button}>
              <Image  style={styles.button} source={require('../../img/icon/next.png')}></Image>
          </TouchableOpacity>
          </LinearGradient>
          </View>
    )
  }
  const renderRating =(item)=>{
    const rating=[]
      for(let i=0;i<item;i++){
        rating.push(<Image 
        source={require("../../assets/icons/star.png")}
        style={{width:15, height:15, marginRight:3}}
        resizeMode="cover"
      />)
      }
      return rating;
  }
 
  const _search=(text)=>{
 
     if(text==''){
      setData(dataAll);
     }
       else{
        let arry='';
        arry=data_temp.filter(l=>l.name.toLowerCase().match(text));
       
        setData(arry)
       }
  }
    return(
      <TouchableNativeFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
          <View style={styles.section}>
              <TextInput 
                placeholder="Search.."
                style={{ flex:1, marginLeft:10}}
               
                onChangeText={(text)=>_search(text)}
              />
              <TouchableOpacity
              onPress={()=>_search("")}
              style={{paddingHorizontal:10}}>
                <Image style={{width:30,height:30}} source={require('../../assets/icons/search.png')}></Image>
              </TouchableOpacity>

          </View>
          <View style={styles.flatList}>
          <FlatList 
      data={data}
      renderItem={renderItem}
     keyExtractor={item => `${item.id}`}
     // ItemSeparatorComponent={ItemSeparatorComponent}
      showsVerticalScrollIndicator={false}
    />
          </View>
      </View>
      </TouchableNativeFeedback>
    )
  }
export default All;
const styles = StyleSheet.create({
  container: {
    flex:1,
  
   
  },
  flatList: {
    flex:1,
    marginTop:10
  },
  item: {
    flex:1,
    paddingVertical:10,
    paddingHorizontal:10,
    flexDirection:'row',
    borderRadius:10,
    marginBottom:10
  
  },
  image_container: {
    width: 90,
    height: 90
  },
  image: {
    width:'100%',
    height:'100%',
    borderWidth:5,
    borderColor:'white',
    borderRadius:10
  },
  content: {
    flex:1,
    justifyContent:'center',
    paddingHorizontal:10
  },
  name: {
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  rating: {
    marginTop:5,
    flexDirection:'row'
  },
  button: {
    width:30,
    height:30,
    backgroundColor:'white',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  price_container: {
    flexDirection:'row',
    marginTop:10
  },
  price: {
    backgroundColor:'white',
    paddingVertical:5,
    paddingHorizontal:15,
    borderRadius:50
  },
  textPrice: {
    color:'green',
    fontWeight:'bold'
  },
  section: {
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:100,
    backgroundColor:'#f2f2f2',
    marginTop:10
  }
});