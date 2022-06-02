import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feeds   from "../Screens/Feeds";
import Createpost from "../Screens/Createpost";

const Tab=createBottomTabNavigator();


 const BottomTabNavigator =()=>{
     return(
         <Tab.Navigator
         screenOptions={({route})=>({
             tabBarIcon:({focused, color, size})=>{
                 let iconName;
                 if(route.name=== 'Feed'){
                     iconName= focused
                     ?'book'
                     :book-outline
                    
                 } else if(route.name==='Createpost'){
                     iconName= focused? 'create':'create-outline'

                 }
                 return <Ionicons name={iconName} size={size} color={color}/>
             },

         })}
         tabBarOptions={{
             activeTintColor:"tomato",
             inactyiveTintColor:"gray",
         }}
         >
             <Tab.Screen name="feed" component={Feeds}/>
             <Tab.Screen name="Createpost" component={Createpost}/>
             </Tab.Navigator>
     );
        
 }

 export default BottomTabNavigator;