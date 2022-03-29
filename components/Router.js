import React, {useState} from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash'
import Signin from './screens/Signin'
import Created from './screens/Created'
import Home from './screens/Home'
import Settings from './screens/Settings'


import Foxbit from './screens/connections/Foxbit'


import { NavigatorMenu } from './style/Menu';




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

  


function Router () {


return (
    <Stack.Navigator screenOptions={{gestureEnabled: false,swipeEnabled: false,headerShown:false}} >
      <Stack.Screen name="Splash"   component={Splash} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Created"  component={Created} />
      <Stack.Screen name="Home" options={{}} component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen options={{}} name="Foxbit" component={Foxbit} />
    </Stack.Navigator>
)    
}


function Connections () {


  return (
      <Stack.Navigator  screenOptions={{headerShown:false,swipeEnabled:false,gestureEnabled:false}} >
        <Stack.Screen  name="Foxbit" component={Foxbit} />
      </Stack.Navigator>
  )    
  }

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator  useLegacyImplementation={false} drawerContent={(props) => <NavigatorMenu {...props} />} initialRouteName="Splash" screenOptions={{swipeEnabled:false,gestureEnabled:false,swipeEdgeWidth:0,headerShown:false}}>
        <Drawer.Screen  name="Router">
          {(props)=><Router {...props} />}
        </Drawer.Screen>

        <Drawer.Screen name="Connections">
          {(props)=><Connections {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
</NavigationContainer>
  )
}