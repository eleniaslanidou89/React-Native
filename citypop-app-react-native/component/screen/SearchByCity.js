import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import SearchByCityTitle from '../titles/SearchByCityTitle'
import SearchByCity_SearchBar from '../shared/SearchByCity_SearchBar'
import BackButton from '../buttons/BackButton'
import {API_URL} from '../../.env'
import {API_username} from '../../.env'

export default function SearchByCity() {
  const [isLoading, setLoading] = useState(true)
  const [quote, setQuote] = React.useState('')
  const [source, setSource] = React.useState('')

  const [value, setValue] = useState()
  function updateSearch(value) {
    console.log(value)
  }
  useEffect(() => {
    const fetchApiCall = () => {
      fetch('API_URL', {
        method: 'GET',
        headers: {
          username: 'API_username',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setQuote(response.content)
          setSource(response.originator.name)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => setLoading(false))
    }
  })

  return (
    <View style={styles.container}>
      <BackButton />
      <SearchByCityTitle />
      <View
        style={{ height: '40%', backgroundColor: 'moccasin', borderRadius: 10 }}
      >
        <SearchByCity_SearchBar
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
