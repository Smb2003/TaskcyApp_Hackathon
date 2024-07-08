import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { login_service } from '../services/check_auth_services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { save_tokens_constant } from '../utils';
import { authAction } from '../config/Store/Slices';
const SignIn_Screen = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const [data,setData] = useState ({});
  
  const handle_Change_Input = (field,value) => {
    setData({...data,
      [field]:value
    })
    // console.log(data);
  }

  const submit_data = async() => {
    try {
      console.log(data);
      const res =await login_service(data)
      console.log(res);
      if(res) {
        const access_token = res.data.token;
          console.log(access_token);
          await AsyncStorage.setItem(save_tokens_constant, access_token)
          dispatch(authAction({auth:true}))


      }

    console.log({res:res.data})
     
  } catch (error) {
      console.log(error.message)
      
     }
    // navigate.navigate('Bottom_tab_navigation')

  }
  const go_to_signUpPage = () => {
    navigate.navigate('SignUp')
  }
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: 20,paddingVertical: 20}}>
        <Text style={{fontSize: 25, fontWeight: 'bold',color:'#756EF3'}}>Welcome Back</Text>
        <Text style={{fontSize: 17, fontWeight: 'bold',paddingVertical: 20,color:'gray',maxWidth: 260}}>Please enter your email address and password for Login</Text>
      </View>
      <View style={{paddingHorizontal: 20,gap: 3,borderRadius: 10,marginBottom: 100,paddingVertical: 10}}>
        <TextInput onChangeText={(e)=>handle_Change_Input('email',e)} placeholder='Enter Email Address' style={{padding: 10,borderWidth:1, borderBlockColor: 'gray',borderRadius: 10,marginBottom: 20}}/>
        <TextInput onChangeText={(e)=>handle_Change_Input('password',e)} secureTextEntry={true} placeholder='Enter Password' style={{padding: 10,borderWidth:1, borderBlockColor: 'gray',borderRadius: 10,marginBottom: 20}}/>
        <TouchableOpacity onPress={submit_data} style={{padding: 18,backgroundColor:'#5451D6', borderRadius: 10}}>
        <Text style={{textAlign: 'center',fontSize:18, fontWeight: 'bold',color: 'white'}}>
            Sign In
        </Text>
    </TouchableOpacity>
    <View style={{justifyContent: 'center', alignItems: 'center',gap: 10, paddingVertical: 20}}>
      <Text>Signin with </Text>
      <View style={{flexDirection: 'row',gap: 20, paddingVertical: 30,justifyContent: 'center',alignItems: 'center'}}> 
        <AntDesign name='apple1' size={40} color='black'/>
        <AntDesign name='google' size={40} color='red'/> 
      </View>
      <View  style={{flexDirection: 'row', paddingVertical: 10}}>
        <Text style={{fontSize: 19}}>Not registered yet! </Text>
        <TouchableOpacity onPress={go_to_signUpPage}><Text style={{fontSize:20,fontWeight: 'bold',color:'#5451D6'}}>Sign Up</Text></TouchableOpacity>
      </View>
    </View>
      </View>

    </ScrollView>
  )
}

export default SignIn_Screen