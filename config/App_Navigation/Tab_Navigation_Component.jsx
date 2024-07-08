import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Profile from '../../screens/Profile';
import Create_post from '../../screens/Create_post';
import Message from '../../screens/Message';
const Tabs = createBottomTabNavigator();
const Tab_Navigation_Component = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:'#756EF3',tabBarInactiveTintColor:'black',tabBarActiveBackgroundColor:'lightgray',tabBarInactiveBackgroundColor:'white'}}>
        <Tabs.Screen name='Home' component={Home} options={{tabBarIcon:(color)=>{
          return <FontAwesome name="home" size={30} color={color} />
        },tabBarActiveTintColor:'#756EF3'}}/>
        <Tabs.Screen name='Create_post' component={Create_post} options={{tabBarIcon:(color)=>{
          return <FontAwesome name="home" size={30} />
        }}}/>
        <Tabs.Screen name='Message' component={Message} options={{tabBarIcon:(color)=>{
          return <AntDesign name="message1" size={30} />
        }}}/>
        <Tabs.Screen name='Profile' component={Profile} options={{tabBarIcon:(color)=>{
          return <FontAwesome name="user" size={30} />
        }}}/>
    </Tabs.Navigator>
  )
}

export default Tab_Navigation_Component