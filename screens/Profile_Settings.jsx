import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux';
import { authAction } from '../config/Store/Slices';
const ProfileScreen = () => {
  const [teamCount, setTeamCount] = useState(8);
  const [labelCount, setLabelCount] = useState(13);
  const [taskCount, setTaskCount] = useState(8);
  const [memberCount, setMemberCount] = useState(13);
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const go_back_to_ProfilePage = () => {
    navigate.navigate('Profile')
  }
  const Logout = () => {
     dispatch(authAction({auth:false}));
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={go_back_to_ProfilePage} style={styles.closeButton}>
        <AntDesign name='arrowleft' size={30} color="#4285F4" />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assests/Images/Splash_Screen.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Alvart Ainstain</Text>
          <Text style={styles.profileUsername}>@albart.ainstain</Text>
          <TouchableOpacity style={styles.viewProfileButton}>
            <Text style={styles.viewProfileText}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.workspaceContainer}>
        <Text style={styles.workspaceTitle}>Workspace</Text>
        <View style={styles.workspaceItem}>
          <Text style={styles.workspaceItemText}>Ui Design</Text>
          <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.inviteText}>Invite</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.manageContainer}>
        <Text style={styles.manageTitle}>Manage</Text>
        <View style={styles.manageItems}>
          <TouchableOpacity style={styles.manageItem}>
            <Text style={styles.manageItemText}>Team</Text>
            <Text style={styles.manageItemCount}>{teamCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.manageItem}>
            <Text style={styles.manageItemText}>Labels</Text>
            <Text style={styles.manageItemCount}>{labelCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.manageItem}>
            <Text style={styles.manageItemText}>Task</Text>
            <Text style={styles.manageItemCount}>{taskCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.manageItem}>
            <Text style={styles.manageItemText}>Member</Text>
            <Text style={styles.manageItemCount}>{memberCount}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={Logout}style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  closeButton: {
    position: 'relative',
    top: 10,
    right: 10,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  closeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileUsername: {
    fontSize: 14,
    color: '#666',
  },
  viewProfileButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginTop: 10,
  },
  viewProfileText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  workspaceContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  workspaceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  workspaceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    marginBottom: 10,
  },
  workspaceItemText: {
    fontSize: 16,
  },
  inviteButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  inviteText: {
    color: '#fff',
    fontSize: 14,
  },
  manageContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  manageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  manageItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  manageItem: {
    width: '48%',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  manageItemText: {
    fontSize: 16,
  },
  manageItemCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  logoutButton: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    margin: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProfileScreen;
