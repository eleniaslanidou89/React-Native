import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import SearchByCityTitle from '../titles/SearchByCityTitle'
import Searchbar from '../shared/SearchByCity_SearchBar'
export default function SearchByCity() {
  const [value, setValue] = useState()
  function updateSearch(value) {
    //do your search logic or anything
    console.log(value)
  }
  return (
    <View style={styles.container}>
      <SearchByCityTitle/>
      <View
        style={{ height: '40%', backgroundColor: '#3F569C', borderRadius: 10 }}
      >
        <Image
          style={{ marginTop: '15%', marginLeft: '5%' }}
          source={require('../../assets/images/ic_back.png')}
        />
        <Searchbar
          value={value}
          updateSearch={updateSearch}
          style={{ marginTop: '20%' }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red', height: '100%', width: '100%'
  },
})