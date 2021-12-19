
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ModalTemp from '../scenes/ModalTemp';
import icons from '../constants/icons';
const DetailFooter=() =>{
    const featuresData = [
        {
            id: 1,
            name: "Food",
            temp:[
                {
                    id:1,
                    name:"food",
                    icon: icons.food,
                },],
            detail:"HomeFood"
        },
        {
            id: 2,
            name: "Bike",
            temp:[
                {
                    id:1,
                    name:"bike",
                    icon: icons.bike,
                },]
        },
        {
            id: 3,
            name: "Car",
            temp:[
                {
                    id:1,
                    name:"car",
                    icon: icons.car,
                },]
        },
        {
            id: 4,
            name: "Ship",
            temp:[
                {
                    id:1,
                    name:"car",
                    icon: icons.ship,
                },]
        },
        {
            id: 5,
            icon: icons.subscribe,
            name: "Subscribe",
            temp:[
                {
                    id:1,
                    name:"car",
                    icon: icons.subscribe,
                },]
        },
        {
            id: 6,
            name: "Doctor",
            temp:[
                {
                    id:1,
                    name:"car",
                    icon: icons.doctor,
                },]
        },
        {
            id: 7,
            name: "Mobile",
            temp:[
                {
                    id:1,
                    name:"car",
                    icon: icons.phone,
                },]
        },
        {
            id: 8,
            name: "More",
            temp:[
                {
                    id:1,
                    name:"more",
                    icon: icons.more,
                },]
        },
        {
            id: 9,
            name: "Social",
            temp:[
                {
                    id:1,
                    name:"food1",
                    icon: icons.ship,
                },
                {
                    id:2,
                    name:"food2",
                    icon: icons.ship,
                },
                {
                    id:3,
                    name:"food3",
                    icon: icons.ship,
                },
                {
                    id:4,
                    name:"food4",
                    icon: icons.ship,
                },
            ]
        },
        {
            id: 10,
            name: "News",
            temp:[
                {
                    id:1,
                    name:"Facebook",
                    icon: icons.fb,
                },
                {
                    id:2,
                    name:"google",
                    icon: icons.google,
                },
                {
                    id:3,
                    name:"food3",
                    icon: icons.ship,
                },
                {
                    id:4,
                    name:"food4",
                    icon: icons.ship,
                },
            ]
        },
        {
            id: 11,
            name: "Video",
            temp:[
                {
                    id:1,
                    name:"YouTube",
                    icon: icons.youTube,
                },
                {
                    id:2,
                    name:"UC",
                    icon: icons.like,
                },
                {
                    id:3,
                    name:"Mini",
                    icon: icons.location,
                },
                {
                    id:4,
                    name:"Bounds",
                    icon: icons.pin,
                },
            ]
        },
        {
            id: 12,
            name: "Sport",
            temp:[
                {
                    id:1,
                    name:"food1",
                    icon: icons.basket,
                },
                {
                    id:2,
                    name:"food2",
                    icon: icons.drink,
                },
                {
                    id:3,
                    name:"food3",
                    icon: icons.hamburger,
                },
                {
                    id:4,
                    name:"food4",
                    icon: icons.master_card,
                },
            ]
        },
    ]
    let arrItem=[featuresData];
    const [TempModal,setTempModal]=useState('');
    const renderItem=({ item })=>{
       
        return(
          <View style={styles.viewImgWrap}>
          {
            <TouchableOpacity onPress={()=>{
                if(item.id==1)
                {
                    navigation.navigate("HomeFood")
                }
                else if(item.id==2){
                    Alert.alert(`${item.id}`)
                }
                else if(item.id==3){
                    Alert.alert(`${item.id}`)
                }
                else if(item.id==4){
                    navigation.navigate("ShipOder")
                }
                else if(item.id==5){
                    Alert.alert(`${item.id}`)
                }
                else if(item.id==6){
                    Alert.alert(`${item.id}`)
                }
                else if(item.id==7){
                    Alert.alert(`${item.id}`)
                }
                else if(item.id==8){
                    Alert.alert(`${item.id}`)
                }
                else if(item.id==9){
                    setTempModal(item.temp);
                    setVisibleModal(true);
                }
                else if(item.id==10){
                    setTempModal(item.temp);
                    setVisibleModal(true);
                }
                else if(item.id==11){
                    setTempModal(item.temp);
                    setVisibleModal(true);
                }
                else{
                    setTempModal(item.temp);
                    setVisibleModal(true);
                }
                }}>
                <View style={styles.ViewImg}>
                {
                    item.temp.map((item1,key)=>{
                       if(item.temp.length==1){
                        return( 
                            <View >
                            <Image style={styles.imgTempImg} source={item1.icon}></Image>
                            </View>
                            )
                       }
                       else
                       {
                        return( 
                            <View>
                            <Image style={styles.imgTemp} source={item1.icon}></Image>
                            </View>
                            )
                       }
                        
                })
                }
                </View>
                <Text style={{marginLeft:5}}>{item.name}</Text>
            </TouchableOpacity>
          }
            </View>
        )
        }
const [visibleModal,setVisibleModal]=useState(false);
const [Number,setNumber]=useState(4);
const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <FlatList
        data={featuresData}
        numColumns={Number}
        renderItem={renderItem}
        keyExtractor={item=>`${item.id}`}
        style={styles.flexWrap}
    ></FlatList>
    <ModalTemp visibleModal={visibleModal} setVisibleModal={setVisibleModal} route={TempModal}></ModalTemp>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:7,
    flexWrap:'wrap',
    width:'100%',
    display:'flex',
    marginHorizontal:10
    },
    ViewImg:{
        width:70,
        height:60,
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    imgTemp:{
    marginHorizontal:2,
    marginBottom:5,
    width:20,
     height:20,
     borderRadius:6,
    },
    imgTempImg:{
        marginHorizontal:2,
        marginBottom:5,
        width:60,
         height:50,
         borderRadius:6,
        },
    viewImgWrap:{
        width:"25%",
        marginTop:10,
    }
  });
  
export default DetailFooter