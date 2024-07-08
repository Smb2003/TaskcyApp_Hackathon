import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../screens/Home';
import Splash_Screen from '../../screens/Splash_Screen';
import Gets_Started_1 from '../../screens/Gets_Started_1';
import Gets_Started_2 from '../../screens/Getting_Started_2';
import SignUp_Screen from '../../screens/SignUp_Screen';
import Getting_Started_3 from '../../screens/Getting_Started_03';
import SignIn_Screen from '../../screens/SignIn_Screen';
import Tab_Navigation_Component from './Tab_Navigation_Component';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../assests/loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { check_auth_service } from '../../services/check_auth_services';
import { authAction } from '../Store/Slices';
import { save_tokens_constant } from '../../utils';
import Progress_Page from '../../screens/ProgressPage';
import AddTaskScreen from '../../screens/Create_task';
import CreateTeam from '../../screens/Create_team';
import ProfileScreen from '../../screens/Profile_Settings';
const Stack = createNativeStackNavigator();
const App_Navigation = () => {
    const authSlice = useSelector((state)=>state.auth)
    console.log(authSlice);
    const dispatch = useDispatch();
    useEffect(() => {
        ( async () => {
    
          const auth_token = await AsyncStorage.getItem(save_tokens_constant)  || ''
          console.log(auth_token);
         if(auth_token){
          try {
            const res = await check_auth_service()
            console.log(res);
            if(res.data){
              dispatch(authAction({auth:true}))
            }
          } catch (error) {
            dispatch(authAction({auth:false}))
          }
         }
        //  else{
        //   dispatch(authAction({auth:false}))
        //  }
      
        })();

      }, [])
  return (
    <>
    {/* {authSlice.loading ? <Loader size='large' />: */}
    <NavigationContainer>
        {authSlice.auth ? 
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Bottom_tab_navigation" component={Tab_Navigation_Component}/>
            <Stack.Screen name="Progress_Page" component={Progress_Page}/>
            <Stack.Screen name="AddTaskScreen" component={AddTaskScreen}/>
            <Stack.Screen name="CreateTeam" component={CreateTeam}/>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>

        </Stack.Navigator>
        :
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash_Screen" component={Splash_Screen}/>
            <Stack.Screen name="Gets_Started_1" component={Gets_Started_1}/>
            <Stack.Screen name="Getting_Started_2" component={Gets_Started_2}/>
            <Stack.Screen name="Getting_Started_3" component={Getting_Started_3}/>
            <Stack.Screen name="SignUp" component={SignUp_Screen}
            options={{headerShown: true,title: 'Sign Up',headerTitleAlign:'center'}}/>
            <Stack.Screen name="SignIn" component={SignIn_Screen}
            options={{headerShown: true,title: 'Sign In',headerTitleAlign:'center'}}/>
        </Stack.Navigator>
        }
        </NavigationContainer>
     {/* }  */}
    </>
    )
}

export default App_Navigation