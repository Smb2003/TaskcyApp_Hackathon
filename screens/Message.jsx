import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'

const DATA = [
  {
    id: '1',
    name: 'Jenny Alxinder',
    avatar: require('../assests/Images/Splash_Screen.jpg'),
    status: 'Active now',
  },
  {
    id: '2',
    name: 'Team Align',
    avatar: require('../assests/Images/Splash_Screen.jpg'),
    status: 'Active 1h ago',
  },
  {
    id: '3',
    name: 'Alex Avishek',
    avatar: require('../assests/Images/Splash_Screen.jpg'),
    status: 'Active 1h ago',
  },
  {
    id: '4',
    name: 'Jafor Dicrose',
    avatar: require('../assests/Images/Splash_Screen.jpg'),
    status: 'Active 1h ago',
  },
];

const Item = ({ name, avatar, status }) => (
  <View style={styles.item}>
    <View style={styles.avatarContainer}>
      <Image style={styles.avatar} source={avatar} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
    <TouchableOpacity style={styles.cameraButton}>
    <FontAwesome name="camera" size={25} color='black'/>
    </TouchableOpacity>
  </View>
);

const Message = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = DATA.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => <Item {...item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="arrowleft" size={25} color='black'/>
        </TouchableOpacity>
        <Text style={styles.title}>Chat</Text>
        <TouchableOpacity style={styles.addButton}>
        <AntDesign name="plus" size={25} color='black'/>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    justifyContent:'space-between',
    padding: 16,
    gap: 120,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  addButton: {
    marginLeft: 'auto',
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    color: '#888',
  },
  cameraButton: {
    marginLeft: 'auto',
  },
});

export default Message;
