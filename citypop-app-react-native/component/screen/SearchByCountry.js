import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import SearchByCountryTitle from '../titles/SearchByCountryTitle'
import SearchByCountry_SearchBar from '../shared/SearchByCountry_SearchBar'
import BackButton from '../buttons/BackButton'

export default function SearchByCountry() {
  const [value, setValue] = useState()
  function updateSearch(value) {
    console.log(value)
  }
  return (
    <View style={styles.container}>
      <BackButton />
      <SearchByCountryTitle />
      <View
        style={{ height: '40%', backgroundColor: 'moccasin', borderRadius: 10 }}
      >
        <Image
          style={{ marginTop: '15%', marginLeft: '5%' }}
          source={require('../../assets/images/ic_back.png')}
        />
        <SearchByCountry_SearchBar
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
  },
})
