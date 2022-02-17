import React from 'react'
import { View, Button } from 'react-native'

export default function SearchByCityTitle({ navigation }) {

  const pressHandlerCity = () => {
    //navigation.navigate('ReviewDetails')
    navigation.push('ReviewDetails')
  }

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