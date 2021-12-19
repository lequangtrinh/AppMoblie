import React,{useState,useRef} from 'react'
import { StyleSheet, StatusBar, Text, View,TouchableWithoutFeedback, Modal,TextInput,FlatList,TouchableOpacity,Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'

import {filterData} from '../data/Data'
import * as ICON from "@expo/vector-icons";
import { Alert } from 'react-native';

const SearchFood=()=>{
    const navigation  = useNavigation();
    const [data, setData] =  useState([...filterData])
    const [data1, setData1] =  useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setTextInput]=useState('');
    const [textInputFossued,setTextInputFossued] = useState(true)
    const textInput = useRef(0)
    const Search=(text)=>{
        if(text){
           
                const newData=data1.filter((item)=>{
                    const itemData=item.name? item.name.toLowerCase():"".toLowerCase()
                    return itemData.indexOf(text.toLowerCase())>-1;
            });
            setData(newData);
            setTextInput(text);
        }
        else{
            setData(data1);
            setTextInput(text);
        }
    }
    return(
        <View>
           <StatusBar backgroundColor="#fff"></StatusBar>
            <TouchableWithoutFeedback onPress={()=>{
                setModalVisible(true)
               
            }}>
            <View style={styles.SearchArea}>

            <ICON.Ionicons name="md-search-circle-outline" size={30} style={styles.icon}></ICON.Ionicons>
            <Text>Search</Text>
            </View>
            </TouchableWithoutFeedback>
            
            <Modal animationType="fade"
            visible={modalVisible}
           transparent={false}
            >
            <View style={{flex:1,paddingTop:"4%"}}>
                <View style={styles.view}>
                    <View style={styles.TextInput}>
                            <ICON.Ionicons name = {textInputFossued ? "arrow-back" : "md-search-circle-outline" }  size={20}
                                onPress = {()=>{
                                        if(textInputFossued)
                                        setModalVisible(false)
                                        setTextInputFossued(true)
                                            }}
                                    style = {styles.icon2} 
                                    type  ="material"
                                    iconStyle ={{marginRight:5}}
                                />
                            <TextInput 
                                style ={{width:"90%"}}
                                placeholder =""
                                autoFocus = {false}
                                ref = {textInput}
                                value={value}
                                onFocus = {()=>{
                                    setTextInputFossued(true)
                                }} 

                                onBlur = {()=>{
                                    setTextInputFossued(false)
                                }}

                                onChangeText ={text=>{Search(text)}}
                            />
                            
                            <ICON.MaterialIcons
                                name = {textInputFossued ? "cancel" : null } size={20}
                                iconStyle ={{color:"#fff"}}
                                type ="material"
                                style={{marginRight:-4}}
                                onPress ={()=>{
                                        textInput.current.clear() //làm sạch dữ liệu
                                               
                                }}
                            />
                          
                    </View>
                </View>
                <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity 
                       onPress = {() =>{

                            Keyboard.dismiss
                            //navigation.navigate("SearchResultScreen",{item:item.name})
                            Alert.alert(`${item.name}`)
                            setModalVisible(false)
                            setTextInputFossued(true)
                                }} >
                    <View style={{  flexDirection: 'row',padding: 15,alignItems: 'center',}}>
                        <Text style={{color:"#C0C0C0", fontSize:15 }}>{item.name}</Text>
                    </View>
              </TouchableOpacity>
                )}
            keyExtractor={item => item.id}

             />             
            </View>
            </Modal>
        </View>
    )
}
export default SearchFood
const styles=StyleSheet.create({
    container :{
        flex:1
    },

    text1:{
        color:"#C0C0C0",
        fontSize:16
    },
    icon:{
        
        position: "absolute",
        alignItems: "flex-end",
        right: 5,
        top:10,

    },
    TextInput:{
        height:50,
        borderWidth:1,
         borderRadius:12,
         marginHorizontal:0,
         borderColor:"#86939e",
         flexDirection:"row",
         justifyContent:"space-evenly",
         alignContent:"center",
         alignItems:"center",
         paddingLeft:10,
         paddingRight:10
  
      },
      view:{ height:70,
        justifyContent:"center",
        paddingHorizontal:10,
      
  },
  SearchArea:{
      marginHorizontal:10,
    width:"94%",
    height:50,
    paddingLeft:10,
    borderRadius:12,
    borderWidth:1,
    borderColor:"#86939e",
    flexDirection:"row",
    alignItems:"center"
  }
})