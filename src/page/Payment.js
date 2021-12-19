import React, { useState } from "react";
import { TextInput } from "react-native";
import {
    View,
    Text,
    Image,
    TouchableOpacity,StatusBar,StyleSheet,FlatList,ScrollView,Alert
} from "react-native";
import LottieView from 'lottie-react-native';
import * as ICON from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';

const Payment=()=>{
    const [valueInput,setValueInput]=useState('');
    const navigation=useNavigation();
    const count=2;
    const data=[
        {
            id:1,
            name:"Shop",
            img:require("../img/icon/shop.png")
        },
        {
            id:2,
            name:"Sticker",
            img:require("../img/icon/sticker.png")
        },
        {
            id:3,
            name:"Game",
            img:require("../img/icon/video-games.png")
        },
        {
            id:4,
            name:"eGovermm...",
            img:require("../img/icon/eGovermm.png")
        },
        {
            id:5,
            name:"Fiza",
            img:require("../img/icon/filza-1.png")
        },
        {
            id:6,
            name:"Ví ZaloPay",
            img:require("../img/icon/zalo-pay.jpg")
        },
        {
            id:7,
            name:"Nạp Tiền ĐT",
            img:require("../img/icon/pay.jpg")
        },
        {
            id:8,
            name:"Trả Hóa Đơn",
            img:require("../img/icon/hoadon.jpg")
        },
        {
            id:9,
            name:"Shop Lazada",
            img:require("../img/icon/zalo-pay.jpg")
        },
        {
            id:10,
            name:"Home & Car",
            img:require("../img/icon/electric-car.png")
        }
    ];
    const dataGame=[
        {
            id:1,
            name:"Võ Lâm Truyền Kỳ",
            img:require("../img/images/volam.jpg")
        },
        {
            id:2,
            name:"Tiến Lên",
            img:require("../img/images/tienlen.png")
        },
        {
            id:3,
            name:"Tú Lơ Khơ",
            img:require("../img/images/tulokho.png")
        },
        {
            id:4,
            name:"Ngạo Long",
            img:require("../img/images/long-ngao-chien-than.jpg")
        },
        {
            id:5,
            name:"Bida Zagoo",
            img:require("../img/images/BidaZagoo.jpg")
        },
        {
            id:6,
            name:"PocKer Việt Nam",
            img:require("../img/images/pocker.png")
        },
        {
            id:7,
            name:"Cờ Tỉ Phú",
            img:require("../img/images/cotiphu.jpg")
        },
        {
            id:8,
            name:"Cờ Tướng",
            img:require("../img/images/cotuong.png")
        },
        {
            id:9,
            name:"Crazy Tiến Lên",
            img:require("../img/icon/zalo-pay.jpg")
        },
        {
            id:10,
            name:"iCá- Bắn Cá",
            img:require("../img/icon/electric-car.png")
        }
    ];
    const dataOfficial=[
        {
            id:1,
            name:"Võ Lâm Truyền Kỳ",
            img:require("../img/images/volam.jpg"),
            title:"đây là hoạt động phi ấdadadadadadadadadadadadadadadad"
        },
        {
            id:2,
            name:"Tiến Lên",
            img:require("../img/images/tienlen.png"),
            title:"đây là hoạt động phi ấdadadadadadadadadadadadadadadad"
        },
        {
            id:3,
            name:"Tú Lơ Khơ",
            img:require("../img/images/tulokho.png"),
            title:"đây là hoạt động phi ấdadadadadadadadadadadadadadadad"
        },
        {
            id:4,
            name:"Ngạo Long",
            img:require("../img/images/long-ngao-chien-than.jpg"),
            title:"đây là hoạt động phi ấdadadadadadadadadadadadadadadad"
        },
        {
            id:5,
            name:"Bida Zagoo",
            img:require("../img/images/BidaZagoo.jpg"),
            title:"đây là hoạt động phi ấdadadadadadadadadadadadadadadad"
        }
    
    ];
    const renderItem=({item})=>{
        if(item.id==count){
            return(
                <View style={{ alignItems:"center",
                justifyContent:"center"}}>
                 <LottieView style={{width:30,marginBottom:-29,left:7,marginTop:6}} source={require('../img/images/dot.json')} autoPlay loop></LottieView>
                    <TouchableOpacity style={styles.bnt} onPress={()=>{Alert.alert(`xem id này: ${item.id}`)}}>
                   
                        <Image style={styles.icon} source={item.img}></Image>
                    </TouchableOpacity>
                    <Text>{item.name}</Text>
                </View>
            )
        }
        else{
            return(
                <View style={{ alignItems:"center",
                justifyContent:"center"}}>
                    <TouchableOpacity style={styles.bnt} onPress={()=>{Alert.alert(`xem id này: ${item.id}`)}}>
                        <Image style={styles.icon} source={item.img}></Image>
                    </TouchableOpacity>
                    <Text>{item.name}</Text>
                </View>
            )
        }
       
    }
    const renderItemGame=({item})=>{
        return(
            <View style={{ alignItems:"center",
            justifyContent:"center"}}>
                <TouchableOpacity style={styles.bntGme} onPress={()=>{Alert.alert(`xem id này: ${item.id}`)}}>
                    <Image style={styles.img} source={item.img}></Image>
                </TouchableOpacity>
                <Text numberOfLines={1} style={{width:70}} >{item.name}</Text>
            </View>
        )
    }
    const renderItemOfficial=({item})=>{
        return(
            <View style={{ alignItems:"center",width:200,height:230,borderRadius:20,backgroundColor:"#fff",
            justifyContent:"center",marginHorizontal:10}}>
                <TouchableOpacity style={styles.bntOfficial} onPress={()=>{Alert.alert(`xem id này: ${item.id}`)}}>
                    <Image style={styles.imgOfficial} source={item.img}></Image>
                    <Text style={{fontSize:16,fontWeight:"bold",textAlign:"center",marginTop:10}}>{item.name}</Text>
                    <Text numberOfLines={2} style={{fontSize:15,color:"#D8D8D9",marginTop:5,marginBottom:10,marginHorizontal:5}}>{item.title}</Text>
                    <TouchableOpacity onPress={()=>{Alert.alert(`xem id này: ${item.id}`)}}
                    style={{width:150,height:40,backgroundColor:"#81DAF5",borderRadius:20,alignItems:"center",justifyContent:"center",marginHorizontal:20}}>
                    <Text   style={{textAlign:"center"}}>Tìm Hiêu</Text>
                </TouchableOpacity>
                </TouchableOpacity>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#276ccc"></StatusBar>
            <View style={styles.header}>
            <TouchableOpacity style={{top:30,right:0,width:25,height:25,position: "absolute",
        alignItems: "flex-end",}} onPress={()=>{navigation.navigate("PayMent")}}>
            <ICON.MaterialIcons name="qr-code-scanner" size={24} color="#fff" style={{right:0,width:25,position: "absolute",
        alignItems: "flex-end",}}></ICON.MaterialIcons>
            </TouchableOpacity>
            <ICON.MaterialIcons name="search" size={24} color="#fff" style={{top:30,left:10,width:25}}></ICON.MaterialIcons>
            <TextInput style={styles.input} placeholder="Tìm Kiếm Bạn Bè, Tin Nhắn..."
            onChangeText={text=>setValueInput(text)}
             ></TextInput>
            </View>
            <ScrollView>
            <View style={{top:20}}>
            <Image style={styles.imgHeder} source={{uri:"https://images.viblo.asia/01cb5447-ae32-46db-8224-6c7392202648.png"}}></Image>
            <Text style={{top:-100,left:35,fontSize:15,fontWeight:"bold",color:"#000"}}>zalo Connect</Text>
            </View>
            <View style={{top:10}}>
                <FlatList data={data}
                renderItem={renderItem}
                numColumns={4}
                ></FlatList>
            </View>
            <View style={{top:30, width:"100%",height:200}}>
            <View>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Top Games</Text>
            </View>
              <View style={{position: "absolute",
        alignItems: "flex-end",right:20,top:5}}>
        <TouchableOpacity >
        <ICON.AntDesign name="right" size={17} color="#BDBDBD" style={{marginLeft:70,top:4}}></ICON.AntDesign>
        <Text style={{marginTop:-15,color:"#BDBDBD"}}>Xem Thêm</Text>
        </TouchableOpacity>
        </View>
             <View style={{marginLeft:5}}>
              <ScrollView>
                  <FlatList
                  contentContainerStyle={{
        alignSelf: 'flex-start'
    }}
                  showsVerticalScrollIndicator={false}
                 showsHorizontalScrollIndicator={false}
                  horizontal={true}
                   data={dataGame}
                  renderItem={renderItemGame}
                  ></FlatList>
            </ScrollView>
            </View>
            </View>
            <View style={{width:"100%",height:300}}>
             <View style={{left:0,marginTop:10,marginBottom:10,left:10}}>
             <Text style={{fontWeight:"bold",fontSize:20}}>Gợi ý Official Account</Text>
             </View>
             <View style={{marginLeft:5}}>
                 <ScrollView>
                 <FlatList
                  contentContainerStyle={{
        alignSelf: 'flex-start'
    }}
                  showsVerticalScrollIndicator={false}
                 showsHorizontalScrollIndicator={false}
                  horizontal={true}
                   data={dataOfficial}
                  renderItem={renderItemOfficial}
                  ></FlatList>
                  </ScrollView>
                  </View>
             </View>
              </ScrollView>
            </View>
    )
}
export default Payment
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        width:"100%",
        height:70,
        backgroundColor:"#276ccc"
    },
    input:{
        width:330,
        height:40,
       color:"#fff",
       fontSize:19,
       marginHorizontal:40
    },
    imgHeder:{
        width:"85%",
        height:100,
        borderRadius:10,
        marginHorizontal:30
    },
    icon:{
        width:25,
        height:25
    },
    bnt:{
        width:40,
        height:40,
        backgroundColor:"#fff",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30,
        marginTop:20,
    },
    bntGme:{
        width:90,
        height:90,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:5,
        marginTop:20,
    },
    img:{
        width:80,
        height:80,
    },
    bntOfficial:{
        width:200,height:230
    },
    imgOfficial:{
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        width:200,
        height:90
    }
})