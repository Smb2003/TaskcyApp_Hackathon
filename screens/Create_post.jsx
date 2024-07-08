import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

// import { faEdit, faPlus, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';

const Create_post = () => {
  const navigate = useNavigation();
  const [buttonHeight, setButtonHeight] = useState(new Animated.Value(0));
  const [showButtons, setShowButtons] = useState(false);

  const handlePress = () => {
    setShowButtons(!showButtons);
    Animated.timing(buttonHeight, {
      toValue: showButtons ? 0 : 100,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const add_task = () => {
    navigate.navigate('AddTaskScreen')
  };
  const create_team = () => {
    navigate.navigate('CreateTeam')
  };
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'lightgray',width:"100%",paddingHorizontal: 15,paddingVertical: 10,borderTopRightRadius: 30, borderTopLeftRadius: 30}}>

        <TouchableOpacity onPress={add_task} style={styles.button}>
          <FontAwesome name="pencil-square-o" size={30} color="#4285F4" />
          <Text style={styles.buttonLabel}>Create Task</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={create_team} style={styles.button}>
          <EvilIcons name='plus' size={30} color="#4285F4" />
          <Text style={styles.buttonLabel}>Create Project</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={create_team} style={styles.button}>
          <AntDesign name='team' size={30} color="#4285F4" />
          <Text style={styles.buttonLabel}>Create Team</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={create_team} style={styles.button}>
          <AntDesign name='clockcircleo' size={30} color="#4285F4" />
          <Text style={styles.buttonLabel}>Create Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.4)',
    alignItems:'center',
    bottom: 1,
    justifyContent:' center',
    flexDirection:'column-reverse'
  },
  topButton: {
    backgroundColor: '#4285F4',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  buttonLabel: {
    marginLeft: 12,
    fontSize: 23,
  },
});

export default Create_post;
