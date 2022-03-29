import React, {useState, useEffect} from 'react';
import {RefreshControl, Alert } from 'react-native';
import {ReloadView,} from './../style/Basic'
import {HomeContainer} from '../style/Home'
import { createUser, deleteUser, getUser } from '../storage/user';

import { TopBar } from '../style/HomeBar';

function Home ({route,navigation}) {
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState({picture:undefined,name:"User"});
    const [refreshing, setRefresh] = useState(false)

    useEffect(async ()=>{
        navigation.closeDrawer();
        if(route.params.userInfo){
            setloggedIn(true)
            setuserInfo(route.params.userInfo)
        }else{onRefresh()}
        
    },[route.params])


    logout = () => {
        deleteUser((result)=>{

        })
        navigation.push('Splash',[])
    }

    notlogged = () => {
        Alert.alert("You're Not Logged",
                    "Log In to continue!",
                    [
                      {
                        text: "Ok",
                        onPress: () => navigation.navigate('Splash',[]),
                      },
                    ],
                    {
                      cancelable: false,
                      
                    })
    }

    onRefresh = () => {
        setRefresh(true)
        setTimeout(()=>{
            getUser(async (user)=>{
                if(user){
                    await setuserInfo(user)
                    await setloggedIn(true)
                }else{
                    notlogged()
                }
                await setRefresh(false)
            })

        },2000)
    }

return (
    
        <ReloadView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#000000aa"
          />
            }
        > 
        <HomeContainer>
            <TopBar navigation={navigation} userInfo={userInfo}/>      
      
        </HomeContainer>

        </ReloadView>   
)    
}

export default Home
