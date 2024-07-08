import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { signup_service } from '../services/check_auth_services'
const SignUp_Screen = () => {
  const navigate = useNavigation();
  const [data,setData] = useState ({});
  
  const handle_Change_Input = (field,value) => {
    setData({...data,
      [field]:value
    })
  }

  const submit_data = async() => {
    console.log(data);
     try {
        const res =await signup_service(data)
        console.log(res);
        if(res) {
            navigate.navigate('SignIn')
        }

       console.log({res:res.data})
       
    } catch (error) {
           console.log({error})
        
       }



  }
  const go_to_signInPage = () => {
    navigate.navigate('SignIn')
  }
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: 20,paddingVertical: 20}}>
        <Text style={{fontSize: 25, fontWeight: 'bold',color:'#756EF3'}}>Create Account</Text>
        <Text style={{fontSize: 17, fontWeight: 'bold',paddingVertical: 20,color:'gray',maxWidth: 260}}>Please enter your information and create an account</Text>
      </View>
      <View style={{paddingHorizontal: 20,gap: 3,borderRadius: 10,marginBottom: 100,paddingVertical: 10}}>
        <TextInput onChangeText={(e)=>handle_Change_Input('username',e)} placeholder='Enter Username' style={{padding: 10,borderWidth:1, borderBlockColor: 'gray',borderRadius: 10,marginBottom: 20}}/>
        <TextInput onChangeText={(e)=>handle_Change_Input('email',e)} placeholder='Enter Email Address' style={{padding: 10,borderWidth:1, borderBlockColor: 'gray',borderRadius: 10,marginBottom: 20}}/>
        <TextInput onChangeText={(e)=>handle_Change_Input('password',e)} secureTextEntry={true} placeholder='Enter Password' style={{padding: 10,borderWidth:1, borderBlockColor: 'gray',borderRadius: 10,marginBottom: 20}}/>
        <TouchableOpacity onPress={submit_data} style={{padding: 18,backgroundColor:'#5451D6', borderRadius: 10}}>
        <Text style={{textAlign: 'center',fontSize:18, fontWeight: 'bold',color: 'white'}}>
            Sign Up
        </Text>
    </TouchableOpacity>
    <View style={{justifyContent: 'center', alignItems: 'center',gap: 10, paddingVertical: 20}}>
      <Text style={{fontSize: 17}}>Signup with </Text>
      <View style={{flexDirection: 'row',gap: 20, paddingVertical: 30,justifyContent: 'center',alignItems: 'center'}}> 
        <AntDesign name='apple1' size={40} color='black'/>
        <AntDesign name='google' size={40} color='red'/> 
      </View>
      <View  style={{flexDirection: 'row', paddingVertical: 10}}>
        <Text style={{fontSize: 19}}>Have an account? </Text>
        <TouchableOpacity onPress={go_to_signInPage}><Text style={{fontSize:20,fontWeight: 'bold',color:'#5451D6'}}>Sign In</Text></TouchableOpacity>
      </View>
    </View>
      </View>

    </ScrollView>
  )
}

export default SignUp_Screen