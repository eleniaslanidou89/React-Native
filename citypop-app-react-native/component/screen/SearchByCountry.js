import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
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
