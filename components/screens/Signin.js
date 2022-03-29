import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Title,Container,BoldTitle, BlueButton, WhiteButton, ButtonTitleLight, ButtonTitleDark} from './../style/Basic'
import { createUser } from '../storage/user';

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

function Signin ({navigation}) {
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

    _signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
         
          createUser(userInfo.user.name,
            userInfo.user.familyName,
            userInfo.user.photo,
            userInfo.user.email,
            async (user) => {
                await setuserInfo(userInfo);
                await setloggedIn(true);
                console.log(user)
                await navigation.navigate('Created',user)
          })
        } catch (error) {
            setuserInfo([]);
            setloggedIn(false)
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            } else {
            // some other error happened
            }
        }
    }

return (
    <Container>
        <Title>Every...<BoldTitle>Here</BoldTitle></Title>
        
        <BlueButton onPress={()=>{_signIn()}}>
            <ButtonTitleLight>Connect With Google</ButtonTitleLight>
        </BlueButton>

        <WhiteButton>
            <ButtonTitleDark>Just Start</ButtonTitleDark>
        </WhiteButton>
    </Container>
)    
}

export default Signin