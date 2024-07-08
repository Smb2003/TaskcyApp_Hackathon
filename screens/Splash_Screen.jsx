import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash_Screen = () => {
    const navigate = useNavigation();

    const go_To_Getting_Started = () => {
        navigate.navigate('Gets_Started_1')
    } 
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <View style={styles.Inner_Container_1}>
                    <Image resizeMode='cover'style={{marginLeft: 1,width:420}} source={require('../assests/Images/Splash_Screen.jpg')}/>
                </View>
                <View style={styles.Inner_Container_2}>
                    <View style={{paddingHorizontal: 20,gap: 10}}>
                        <Text style={{fontSize: 55, fontWeight: 'bold',textAlign: 'center', color: '#756EF3'}}>
                            Taskcy
                        </Text>
                        <Text style={{fontSize: 36, fontWeight: 'bold', color: 'black', textAlign: 'center'}}>
                            Building Better Workplaces
                        </Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold',color:'gray',textAlign: 'center'}}>
                            Create a unique emotional story that describes better than words
                        </Text>
                        <TouchableOpacity onPress={go_To_Getting_Started} style={{padding: 18,backgroundColor:'#5451D6', marginVertical: 50, borderRadius: 10}}>
                            <Text style={{textAlign: 'center',fontSize:18, fontWeight: 'bold',color: 'white'}}>
                                Get Started
                            </Text>
                        </TouchableOpacity>
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
        flex: 1.4,
        backgroundColor: 'snow',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    }
})
export default Splash_Screen