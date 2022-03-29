import React, {useState, useEffect} from 'react';
import { RefreshControl, Alert } from 'react-native';
import {ReloadView} from '../../style/Basic'
import {
    Container,
    InfoTitle,
    InfoValue,
    InfoContainer,
    ButtonContainer,
    ButtonHitBox,
    ButtonTitle,
} from './../../style/connections/Foxbit'
import TopBar from '../../style/TopBar';
import { useLinkProps } from '@react-navigation/native';

function Foxbit ({route,navigation}) {
    const [refreshing, setRefresh] = useState(false)
    const [status, setStatus] = useState("Not Set")
    const [loggedIn, setloggedIn] = useState(false)

    useEffect(()=>{
        onRefresh()
    },[route.params])

    onRefresh = () => {
        setRefresh(true)
        setTimeout(async ()=>{
            
                await setRefresh(false)
        },2000)
    }

    login = () => {

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
        <Container>
            <TopBar justBack={false} who={'Foxbit'} navigation={navigation}/>
        
            <InfoContainer>
                <InfoTitle>Status</InfoTitle>
                <InfoValue>{status}</InfoValue>
            </InfoContainer>

            <ButtonContainer>
                <ButtonHitBox bg={route.params.bg} onPress={login()}>
                    <ButtonTitle color={route.params.color}>Login with Foxbit</ButtonTitle>
                </ButtonHitBox>
            </ButtonContainer>

        </Container>

        </ReloadView>   
)    
}

export default Foxbit
