import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { getPlants } from '../api/api';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [text, setText] = useState('');
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getPlants
      .then(res => {
        setPlants(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);



  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={setSearch}
          value={search}
        />
        <EvilIcons name="search" size={24} color="#00000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  search: {
    flexDirection: 'row',
    color: '#27242A',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 35,
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 40,
    backgroundColor: '#f1f1f2',
  },
  searchInput: {
    width: '90%',
    height: '100%',
  },
});
export default SearchBar;
