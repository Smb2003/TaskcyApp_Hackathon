import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Progress_Page = () => {
  const navigate = useNavigation();
  const [selectedDate, setSelectedDate] = useState(20);
  const [tasks, setTasks] = useState([
    {
      time: '10 am',
      title: 'Wareframe elements',
      description: '10am - 11am',
      color: '#87ceeb',
      avatars: [
        require('../assests/Images/Splash_Screen.jpg'),
        require('../assests/Images/Splash_Screen.jpg'),
      ],
      emoji: '🙂',
    },
    {
      time: '12 pm',
      title: 'Mobile app Design',
      description: '11:40am - 12:40pm',
      color: '#90ee90',
      avatars: [
        require('../assests/Images/Splash_Screen.jpg'),
        require('../assests/Images/Splash_Screen.jpg'),
        require('../assests/Images/Splash_Screen.jpg'),
      ],
      emoji: '🥳',
    },
    {
      time: '01 pm',
      title: 'Design Team call',
      description: '01:20pm - 02:20pm',
      color: '#fdd835',
      avatars: [
        require('../assests/Images/Splash_Screen.jpg'),
        require('../assests/Images/Splash_Screen.jpg'),
        require('../assests/Images/Splash_Screen.jpg'),
      ],
      emoji: '🤔',
    },
  ]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  const go_to_home = () => {
    navigate.navigate('Home')
  }
  console.log(selectedDate);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={go_to_home} style={styles.backBtn}>
        <Ionicons name="chevron-back-outline" size={25} color='black'/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Today Task</Text>
        <TouchableOpacity style={styles.editBtn}>
            <FontAwesome name="pencil" size={25} color='black'/>
        </TouchableOpacity>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>October, {selectedDate}</Text>
        <TouchableOpacity style={styles.calendarIcon}>
          <Image source={require('../assests/Images/Splash_Screen.jpg')} style={styles.calendarIcon} />
        </TouchableOpacity>
        <Image source={require('../assests/Images/Splash_Screen.jpg')} style={styles.pencilIcon} />
      </View>
      <Text style={styles.taskText}>15 task today</Text>

      <ScrollView horizontal={true} style={styles.dateOptions}>
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21, 22, 23,24,25,26,27,28,29,30].map((date) => (
          <TouchableOpacity
            key={date}
            style={[styles.dateOption, selectedDate === date && styles.selectedDate]}
            onPress={() => handleDateSelect(date)}
          >
            <Text style={styles.dateOptionText}>{date}</Text>
            <Text style={styles.dateOptionDay}>
              {date === 19 ? 'Sat' : date === 20 ? 'Sun' : date === 21 ? 'Mon' : date === 22 ? 'Tue' : 'Wed'}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.taskSection}>
        {tasks.map((task) => (
          <View key={task.time} style={styles.taskItem}>
            <Text style={styles.taskTime}>{task.time}</Text>
            <View style={[styles.taskContent, { backgroundColor: task.color }]}>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
              </View>
              <View style={styles.taskAvatars}>
                {task.avatars.map((avatar, index) => (
                  <Image key={index} source={avatar} style={styles.avatar} />
                ))}
              </View>
              <Text style={styles.taskEmoji}>{task.emoji}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backBtn: {
    padding: 5,
    borderRadius: 5,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editBtn: {
    padding: 5,
    borderRadius: 5,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 29,
    fontWeight: 'bold',
    marginRight: 10,
  },
  calendarIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  pencilIcon: {
    width: 20,
    height: 20,
  },
  taskText: {
    fontSize: 16,
    marginBottom: 20,
  },
  dateOptions: {
    marginBottom: 20,
  },
  dateOption: {
    padding: 30,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  selectedDate: {
    backgroundColor: '#87ceeb',
  },
  dateOptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateOptionDay: {
    fontSize: 12,
  },
  taskSection: {
    marginBottom: 20,
  },
  taskItem: {
    marginBottom: 10,
  },
  taskTime: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  taskContent: {
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  taskDescription: {
    fontSize: 14,
  },
  taskAvatars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  taskEmoji: {
    fontSize: 24,
  },
});

export default Progress_Page;