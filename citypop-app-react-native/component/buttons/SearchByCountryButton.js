import React from 'react'
import { View, Button } from 'react-native'

export default function SearchByCountryButton({ navigation }) {
  const pressHandlerCountry = () => {}

  return (
    <View style={styles.container}>
      <Button
        onPress={pressHandlerCountry}
        title="SEARCH BY COUNTRY"
        color="#841584"
      />
    </View>
  )
}
