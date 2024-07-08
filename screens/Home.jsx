
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Home = () => {
  const navigate = useNavigation();
  const go_To_SeeProgress = () => {
    navigate.navigate('Progress_Page')
  }
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 10, justifyContent: 'space-between',paddingVertical: 20}}>
        <AntDesign name="menu-fold" size={25} color='black'/>
        <Text style={{fontSize: 20,fontWeight:'bold'}}>Friday,26</Text>
        <FontAwesome name="bell-o" size={25} color='black'/>
      </View>
      <Text style={styles.title}>Let's make a habits together 🤝</Text>
      {/* <ScrollView horizontal={true} style={{}}> */}
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Application Design</Text>
          <Text style={styles.cardSubtitle}>UI Design Kit</Text>
          <View style={styles.progressContainer}>
            <Text style={styles.progress}>Progress</Text>
            <Text style={styles.progressNumber}>50/80</Text>
          </View>
          <View style={styles.progressBar}>
            {/* Implement your progress bar here */}
          </View>
          <View style={styles.userContainer}>
            <Image
              source={require('../assests/Images/Splash_Screen.jpg')}
              style={styles.userImage}
            />
            <Image
              source={require('../assests/Images/Getting_Started_02.png')}
              style={styles.userImage}
            />
            <Image
              source={require('../assests/Images/Getting_started_03.png')}
              style={styles.userImage}
            />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Overview</Text>
          <Text style={styles.cardSubtitle}>UI Design</Text>
          <View style={styles.progressContainer}>
            <Text style={styles.progress}>Progress</Text>
            <Text style={styles.progressNumber}>30/80</Text>
          </View>
          <View style={styles.progressBar}>
            {/* Implement your progress bar here */}
          </View>
          <View style={styles.userContainer}>
            <Image
              source={require('../assests/Images/Splash_Screen.jpg')}
              style={styles.userImage}
            />
            <Image
              source={require('../assests/Images/Splash_Screen.jpg')}
              style={styles.userImage}
            />
            <Image
              source={require('../assests/Images/Splash_Screen.jpg')}
              style={styles.userImage}
            />
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>In Progress</Text>
        <TouchableOpacity onPress={go_To_SeeProgress} style={styles.arrowIcon}>
        <AntDesign name="arrowright" size={25} color='black'/>

        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.progressList}>
          <View style={styles.progressItem}>
            <Text style={styles.progressItemTitle}>Productivity Mobile App</Text>
            <Text style={styles.progressItemSubtitle}>Create Detail Booking</Text>
            <Text style={styles.progressItemTime}>2 min ago</Text>
            <View style={styles.progressCircleContainer}>
              <View style={styles.progressCircle}>
                <Text style={styles.progressCircleText}>60%</Text>
              </View>
            </View>
          </View>
          <View style={styles.progressItem}>
            <Text style={styles.progressItemTitle}>Banking Mobile App</Text>
            <Text style={styles.progressItemSubtitle}>Revision Home Page</Text>
            <Text style={styles.progressItemTime}>5 min ago</Text>
            <View style={styles.progressCircleContainer}>
              <View style={styles.progressCircle}>
                <Text style={styles.progressCircleText}>70%</Text>
              </View>
            </View>
          </View>
          <View style={styles.progressItem}>
            <Text style={styles.progressItemTitle}>Online Course</Text>
            <Text style={styles.progressItemSubtitle}>Working On Landing Page</Text>
            <Text style={styles.progressItemTime}>7 min ago</Text>
            <View style={styles.progressCircleContainer}>
              <View style={styles.progressCircle}>
                <Text style={styles.progressCircleText}>80%</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 30,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    gap:15
  },
  card: {
    width: '75%',
    backgroundColor: '#756EF3',
    padding: 20,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white'
  },
  cardSubtitle: {
    color: 'white',
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  progress: {
    color: 'white',
  },
  progressNumber: {
    fontWeight: 'bold',
  },
  progressBar: {
    height: 5,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  arrowIcon: {
    padding: 5,
    borderRadius: 5,
  },
  arrow: {
    width: 15,
    height: 15,
  },
  progressList: {
    marginBottom: 20,
  },
  progressItem: {
    backgroundColor: 'wheat',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    // flexDirection: 'row'
  },
  progressItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressItemSubtitle: {
    color: '#777777',
    marginBottom: 5,
  },
  progressItemTime: {
    color: '#777777',
  },
  progressCircleContainer: {
    alignItems: 'flex-end',
  },
  progressCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressCircleText: {
    fontWeight: 'bold',
  },
});

export default Home;