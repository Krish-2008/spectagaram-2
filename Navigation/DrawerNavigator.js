import React from "react";
import {CreateDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator'
import profile from "../Screens/profile";
 const drawer=CreateDrawerNavigator();

 const  DrawerNavigator =()=>{
     return(
         <Drawer.Navigator>
             <Drawer.Screen name="home" component={TabNavigator}/>
             <Drawer.Screen name="profile" component={profile}/>
         </Drawer.Navigator>
     );
 };

 export default DrawerNavigator;