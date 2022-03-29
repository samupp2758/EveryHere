import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,RefreshControl, Alert } from 'react-native';
import {ReloadView} from '../style/Basic'
import TopBar from '../style/TopBar';
import {
    SettingsContainer, 
    HeadPassContainer, 
    BlockTitle,
    Icon,
    Name,
    Header,
    SectionTitle,
    Section,
    StatusTitle
} from '../style/Settings'
import { createUser, deleteUser, getUser } from '../storage/user';

function Settings ({route,navigation}) {
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState({picture:undefined,name:"User"});
    const [time, setTime] = useState(0);
    const [refreshing, setRefresh] = useState(false)


    useEffect(async ()=>{
        navigation.closeDrawer();
        onRefresh()
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

    buildConections = () => {
        items = []
        foxbit = {
            status:"Not Set"
        }
        items.push(itemConntect("#ff6000","#fff","#fffa","Foxbit",foxbit.status))
        return(
            <Section>
                {items}
            </Section>
        )
    }

    itemConntect=(bg,color,colorStatus,title,status)=>{
        return(
            <HeadPassContainer disabled={refreshing} onPress={()=>{navigation.navigate(title,{bg:bg,color:color})}} color={bg}>
                <BlockTitle color={color}>{title}</BlockTitle>
                <StatusTitle color={colorStatus}>{status}</StatusTitle>
            </HeadPassContainer>
        )
    }

return (
    
    <ReloadView
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        tintColor="#232323"
      />
        }
    > 
        <SettingsContainer>
            <Header>
            
            <TopBar justBack navigation={navigation}/>



            <Icon source={userInfo.picture == undefined ? require("../../assets/images/user.jpg") : {url:userInfo.picture}}/>
            <Name>{userInfo.name}</Name>
            </Header>

            <SectionTitle>Connect</SectionTitle>
            {buildConections()}

        </SettingsContainer>
    </ReloadView>

)    
}

export default Settings

/*
            <PassContainer>
                <TopicTitle>Title</TopicTitle>
            </PassContainer>

            <BlueButton onPress={()=>{logout()}}>
                <ButtonTitleLight>Log out</ButtonTitleLight>
            </BlueButton>

            <WhiteButton onPress={()=>{navigation.push('Splash')}}>
                <ButtonTitleDark>Splash</ButtonTitleDark>
            </WhiteButton>*/