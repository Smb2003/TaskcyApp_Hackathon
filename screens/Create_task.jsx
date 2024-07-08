import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const AddTaskScreen = () => {
  const navigate = useNavigation(); 
  const [taskName, setTaskName] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [boardStatus, setBoardStatus] = useState('');
  const [saveData, setSaveData] = useState({});

  const handleAddTeamMember = (member) => {
    setTeamMembers([...teamMembers, member]);
  };

  const handleRemoveTeamMember = (index) => {
    setTeamMembers(
      teamMembers.filter((_, i) => i !== index)
    );
  };
  
  const handleSaveTask = () => {
        setSaveData({...saveData,
        taskName,
        teamMembers,
        date,
        startTime,
        endTime,
        boardStatus,
    })
    console.log(saveData);
    };
    const go_back_toCreatePost = () => {
        navigate.navigate('Create_post')
    }

  return (
    <ScrollView>

        <View style={styles.container}>
            <TouchableOpacity onPress={go_back_toCreatePost} style={styles.backButton}>
                <AntDesign name='arrowleft' size={30} color="#4285F4" />
            </TouchableOpacity>
        <Text style={styles.title}>Add Task</Text>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Task Name</Text>
            <TextInput
            // spellCheck={true}
            style={styles.input}
            value={taskName}
            onChangeText={setTaskName}
            placeholder="Enter task name"
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Team Member</Text>
            <View style={styles.teamMembersContainer}>
            {teamMembers.map((member, index) => (
                <View key={index} style={styles.teamMember}>
                <Image
                    source={member.image}
                    style={styles.teamMemberImage}
                />
                <Text style={styles.teamMemberName}>{member.name}</Text>
                <TouchableOpacity
                    onPress={() => handleRemoveTeamMember(index)}
                    style={styles.removeButton}
                >
                    <Text style={styles.removeButtonText}>-</Text>
                </TouchableOpacity>
                </View>
            ))}
            <TouchableOpacity
                onPress={() => handleAddTeamMember({
                name: 'Jeny',
                image: require('../assests/Images/Splash_Screen.jpg'),
                })}
                style={styles.teamMember}
            >
                <Image
                source={require('../assests/Images/Splash_Screen.jpg')}
                style={styles.teamMemberImage}
                />
                <Text style={styles.teamMemberName}>Jeny</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleAddTeamMember({
                name: 'mehrin',
                image: require('../assests/Images/Splash_Screen.jpg'),
                })}
                style={styles.teamMember}
            >
                <Image
                source={require('../assests/Images/Splash_Screen.jpg')}
                style={styles.teamMemberImage}
                />
                <Text style={styles.teamMemberName}>mehrin</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleAddTeamMember({
                name: 'Avishek',
                image: require('../assests/Images/Splash_Screen.jpg'),
                })}
                style={styles.teamMember}
            >
                <Image
                source={require('../assests/Images/Splash_Screen.jpg')}
                style={styles.teamMemberImage}
                />
                <Text style={styles.teamMemberName}>Avishek</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleAddTeamMember({
                name: 'Jaffor',
                image: require('../assests/Images/Splash_Screen.jpg'),
                })}
                style={styles.teamMember}
            >
                <Image
                source={require('../assests/Images/Splash_Screen.jpg')}
                style={styles.teamMemberImage}
                />
                <Text style={styles.teamMemberName}>Jaffor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Date</Text>
            <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="Enter date"
            />
        </View>
        <View style={styles.timeContainer}>
            <View style={styles.timeInputContainer}>
            <Text style={styles.label}>Start Time</Text>
            <TextInput
                style={styles.timeInput}
                value={startTime}
                onChangeText={setStartTime}
                placeholder="Enter start time"
            />
            </View>
            <View style={styles.timeInputContainer}>
            <Text style={styles.label}>End Time</Text>
            <TextInput
                style={styles.timeInput}
                value={endTime}
                onChangeText={setEndTime}
                placeholder="Enter end time"
            />
            </View>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Board</Text>
            <View style={styles.boardContainer}>
            <TouchableOpacity
                style={[styles.boardButton, boardStatus === 'Urgent' && styles.selectedButton]}
                onPress={() => setBoardStatus('Urgent')}
            >
                <Text style={styles.boardButtonText}>Urgent</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.boardButton, boardStatus === 'Running' && styles.selectedButton]}
                onPress={() => setBoardStatus('Running')}
            >
                <Text style={styles.boardButtonText}>Running</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.boardButton, boardStatus === 'ongoing' && styles.selectedButton]}
                onPress={() => setBoardStatus('ongoing')}
            >
                <Text style={styles.boardButtonText}>ongoing</Text>
            </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
            <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    width:20
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  teamMembersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  teamMember: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  teamMemberImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  teamMemberName: {
    marginLeft: 10,
  },
  removeButton: {
    padding: 5,
    marginLeft: 10,
  },
  removeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timeInputContainer: {
    flex: 1,
  },
  timeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  boardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boardButton: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  selectedButton: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  boardButtonText: {
    fontSize: 14,
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AddTaskScreen;
