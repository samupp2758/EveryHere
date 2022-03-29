import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Title,Container,BoldTitle, BlueButton, WhiteButton, ButtonTitleLight, ButtonTitleDark} from './../style/Basic'
import { createUser } from '../storage/user';


import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

function Created (props) {
    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/userinfo.profile'], // [Android] what API you want to access on behalf of the user, default is email and profile
        offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        hostedDomain: '', // specifies a hosted domain restriction
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        accountName: '', // [Android] specifies an account name on the device that should be used
        iosClientId: '608032960706-09n68jfjjn5h6eum2f4uj9uklmfh19ij.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
        openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
        profileImageSize: 1000, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
      });

    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);

    console.log(props.route.params)

return (
    <Container>
        <Title>You're All Set!</Title>
        
        <BlueButton onPress={()=>{props.navigation.navigate('Home',{userInfo:props.route.params})}}>
            <ButtonTitleLight>Go Home</ButtonTitleLight>
        </BlueButton>
    </Container>
)    
}

export default Created