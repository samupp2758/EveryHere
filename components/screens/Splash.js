import React, {useState, useEffect} from 'react';
import {BlueTitle,Container} from './../style/Basic'
import { getUser } from '../storage/user';
import { Loading } from '../style/Loading';

function Splash ({navigation}) {
    
    setTimeout(()=>{

        getUser((user)=>{
            console.log(user)
            if(user == undefined){
                navigation.navigate('Signin',[])
            }else{
                console.log(user.id)
                navigation.navigate('Home',{userInfo:user})
            }
        })
    },5000)
    

return (
    <Container>
        
        <BlueTitle>EveryHere</BlueTitle>
        <Loading/>

    </Container>
)    
}

export default Splash