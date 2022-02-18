import React from 'react'
import { View, Button } from 'react-native'

export default function SearchByCityButton({ navigation }) {
  const pressHandlerCity = () => {}
  navigation.navigate('SearchByCity')
  return (
    <View style={styles.container}>
      <Button
        onPress={pressHandlerCity}
        title="SEARCH BY CITY"
        color="#841584"
      />
    </View>
  )
}
