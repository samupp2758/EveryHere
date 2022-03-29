import styled  from "styled-components";
import { 
    Animated,
    Dimensions
} from 'react-native';
import React, {useState, useEffect} from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    useDrawerProgress,
  } from '@react-navigation/drawer';
import { getUser } from "../storage/user";

const windowWidth = Dimensions.get('window').width;
const windowHeight = "60";


const View = styled.View`
    display: flex;
    height: ${windowHeight}px;
    width: ${windowWidth}px;
    justify-content: center;
    align-items: center;
`

export const Name = styled.Text`
    font-size: 20px;
    margin-left: 15px;
    margin-top: 15px;
    font-family: 'Roboto-Medium';
    margin-bottom: 10px;
    color: #232323;
`

const Icon = styled.Image`
width: 80px;
height: 80px;
margin-top: 10px;
margin-left: 15px;
border-radius: 10000000000000000000px;
`

const style={
    
   }

const labelStyle = {
    fontSize:15,
    marginLeft:-20
} 


export function NavigatorMenu ({route,navigation}){
    const progress = useDrawerProgress();

    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState({picture:undefined,name:"User"});
    const [time, setTime] = useState(0);
    const [refreshing, setRefresh] = useState(false)




    useEffect(async ()=>{
            await getUser(async (user)=>{
                if(user){
                    await setuserInfo(user)
                    await setloggedIn(true)
                    await setRefresh(false)

                }else{
                    notlogged()
                }
            })
    },[route])

    navi = (where) => {
        navigation.closeDrawer()
        navigation.navigate(where,[])
    }
  
    return (
            <DrawerContentScrollView>
                <Icon source={userInfo.picture == undefined ? require("../../assets/images/user.jpg") : {url:userInfo.picture}}/>
                <Name>{userInfo.name}</Name>
                <DrawerItem icon={({ color, size }) => <Entypo color={color} size={size} name={"home"} />} labelStyle={labelStyle} style={style} label="Home" onPress={()=>navi('Home')}/>
                <DrawerItem icon={({ color, size }) => <Fontisto color={color} size={size} name={"player-settings"} />} labelStyle={labelStyle} style={style} label="Settings" onPress={()=>navi('Settings')}/>
            </DrawerContentScrollView>
      );
}