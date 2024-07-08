import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { faHome, faFolderOpen, faPlus, faCommentAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigate = useNavigation();
  const [profileImage, setProfileImage] = useState(require('../assests/Images/Splash_Screen.jpg')); // Replace with your profile image path
  const go_back_to_home = () => {
    navigate.navigate('Home')
  }
  const goto_Settings = () => {
    navigate.navigate('ProfileScreen')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={go_back_to_home}style={styles.backButton}>
          <FontAwesome name='long-arrow-left' size={25}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileSection}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>Alvart Ainstain</Text>
        <Text style={styles.profileUsername}>@albart.ainstain</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statsSection}>
        <View style={styles.stat}>
          <FontAwesome icon='clock-o' size={20} color="#333" />
          <Text style={styles.statText}>5</Text>
          <Text style={styles.statLabel}>On Going</Text>
        </View>
        <View style={styles.stat}>
          <FontAwesome icon='check-circle-o' size={20} color="#333" />
          <Text style={styles.statText}>25</Text>
          <Text style={styles.statLabel}>Total Complete</Text>
        </View>
      </View>
      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>My Projects</Text>
          <FontAwesome name='long-arrow-right' size={25}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Join a Team</Text>
          <FontAwesome name='long-arrow-right' size={25}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={goto_Settings} style={styles.menuItem}>
          <Text style={styles.menuItemText}>Settings</Text>
          <FontAwesome name='long-arrow-right' size={25}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>My Task</Text>
          <FontAwesome name='long-arrow-right' size={25}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',

  },
  backButton: {
    marginRight: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingLeft: 95
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#333',
  },
  profileUsername: {
    fontSize: 16,
    color: '#666',
  },
  editButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#f8f8f8',
  },
  stat: {
    alignItems: 'center',
  },
  statText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  menuSection: {
    paddingHorizontal: 20,
    gap: 10
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor:'lightgray',
    
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomBarItem: {
    padding: 10,
  },
});

export default Profile;