import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

const TeamMember = ({ name, image, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.memberContainer}>
    <Image source={image} style={styles.memberImage} />
    <Text style={styles.memberName}>{name}</Text>
  </TouchableOpacity>
);

const CreateTeam = () => {
    const navigate = useNavigation();
  const [teamName, setTeamName] = useState('');
  const [members, setMembers] = useState([
    { name: 'Jeny', image: require('../assests/Images/Splash_Screen.jpg') },
    { name: 'mehrin', image: require('../assests/Images/Splash_Screen.jpg') },
    { name: 'Avishek', image: require('../assests/Images/Splash_Screen.jpg') },
    { name: 'Jafor', image: require('../assests/Images/Splash_Screen.jpg') },
  ]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [type, setType] = useState('private');
  const [saveData, setSaveData] = useState({});
  const handleMemberPress = (member) => {
    if (selectedMembers.includes(member)) {
      setSelectedMembers(selectedMembers.filter((m) => m !== member));
    } else {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  const handleCreateTeam = () => {
    
    setSaveData({...saveData,
        teamName,
        members: selectedMembers,
        type,
    })
    console.log(saveData);
  };
  const go_back_toCreatePost = () => {
      navigate.navigate('Create_post')
    }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={go_back_toCreatePost} style={styles.backButton}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Team</Text>
      </View>

      <View style={styles.logoContainer}>
        <Image source={require('../assests/Images/Splash_Screen.jpg')} style={styles.logo} />
        <Text style={styles.uploadText}>Upload logo file</Text>
        <Text style={styles.uploadSubText}>Your logo will publish always</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Team Name</Text>
        <TextInput
          style={styles.input}
          value={teamName}
          onChangeText={setTeamName}
        />
      </View>
      <View style={styles.membersContainer}>
        <Text style={styles.inputText}>Team Member</Text>
        <View style={styles.members}>
          {members.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              image={member.image}
              onPress={() => handleMemberPress(member)}
            />
          ))}
          <TouchableOpacity style={styles.addMemberButton}>
            <Text style={styles.addMemberText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.typeContainer}>
        <Text style={styles.inputText}>Type</Text>
        <View style={styles.typeButtons}>
          <TouchableOpacity
            style={[
              styles.typeButton,
              type === 'private' && styles.selectedTypeButton,
            ]}
            onPress={() => setType('private')}
          >
            <Text style={styles.typeButtonText}>Private</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.typeButton,
              type === 'public' && styles.selectedTypeButton,
            ]}
            onPress={() => setType('public')}
          >
            <Text style={styles.typeButtonText}>Public</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.typeButton,
              type === 'secret' && styles.selectedTypeButton,
            ]}
            onPress={() => setType('secret')}
          >
            <Text style={styles.typeButtonText}>Secret</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.createButton} onPress={handleCreateTeam}>
        <Text style={styles.createButtonText}>Create Team</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    marginRight: 10,
  },
  backText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadSubText: {
    fontSize: 12,
    color: '#888',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputText: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  membersContainer: {
    marginBottom: 20,
  },
  members: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  memberContainer: {
    width: 80,
    height: 100,
    alignItems: 'center',
    marginBottom: 10,
  },
  memberImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  memberName: {
    fontSize: 12,
  },
  addMemberButton: {
    width: 80,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  addMemberText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  typeContainer: {
    marginBottom: 20,
  },
  typeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  typeButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedTypeButton: {
    backgroundColor: '#f0f0f0',
  },
  typeButtonText: {
    fontSize: 14,
  },
  createButton: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateTeam;
