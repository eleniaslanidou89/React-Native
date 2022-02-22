import React from 'react'
import { View, Button } from 'react-native'

export default function BackButton({ navigation }) {
  const pressHandlerBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Button onPress={pressHandlerBack} title="CityPop" color="royalblue" />
    </View>
  )
}
