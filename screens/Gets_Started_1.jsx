import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Gets_Started_1 = () => {
    const navigate = useNavigation();

    const go_To_SignUp = () => {
        navigate.navigate('SignUp')
    } 
    const go_to_getting_Started_02 = () => {
        navigate.navigate('Getting_Started_2')
    }
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <View style={styles.Inner_Container_1}>
                    <Image resizeMode='cover'style={{marginLeft: 10}} width='100%' height='100%'source={require('../assests/Images/Getting_Started01.png')}/>
                </View>
                <View style={styles.Inner_Container_2}>
                    <View style={{gap: 10, paddingVertical:20}}>
                        <Text style={{fontSize: 23,paddingHorizontal: 20, fontWeight: 'bold', color: '#756EF3'}}>
                            Task Management
                        </Text>
                        <Text style={{fontSize: 34, paddingHorizontal: 20,fontWeight: 'bold', color: '#002055',maxWidth:267}}>
                        Let's create a <Text style={{color: '#756EF3'}}>space</Text> for your workflows.
                        </Text>
                        <View style={{flexDirection: 'row', gap:5,paddingHorizontal: 20}}>
                            <View style={{width:30,height:12, backgroundColor: '#756EF3',borderRadius: 10}}></View>
                            <View style={{width:10,height:12, backgroundColor: 'lightgray',borderRadius: 10}}></View>
                            <View style={{width:10,height:12, backgroundColor: 'lightgray',borderRadius: 10}}></View>
                        </View>
                        
                        <View style={{height: 100, marginVertical: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <TouchableOpacity onPress={go_To_SignUp} >
                                <Text style={{fontSize:18,paddingHorizontal: 20, fontWeight: 'bold', color: 'gray'}}>
                                Skip
                                </Text>
                            </TouchableOpacity>
                            <View style={{backgroundColor:'blue',width: 90,height: 140,borderTopLeftRadius: 120, borderBottomLeftRadius: 30,justifyContent: 'center',alignItems :'center'}}>
                                <TouchableOpacity  onPress={go_to_getting_Started_02}>
                                    <AntDesign name='arrowright' size={30} color='gray'/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        
                    </View>
                </View>

            </View>
        
        </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    Inner_Container_1 : {
        flex: 1,
        
    },
    Inner_Container_2 : {
        flex: 1,
        backgroundColor: 'snow',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    }
})
export default Gets_Started_1