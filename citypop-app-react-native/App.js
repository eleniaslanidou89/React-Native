import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Button, Text, View } from 'react-native'
export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{ marginTop: '15%', marginBottom: '10%', marginLeft: '40%' }}
      >
        CityPop
      </Text>
      <StatusBar style="auto" />
      <Button
        // onPress={}
        title="SEARCH BY CITY"
        color="#841584"
      />
      <Button
        // onPress={}
        title="SEARCH BY COUNTRY"
        color="#841584"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 90,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  searchbar: {
    marginTop: 20,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'gray',
    width: '100%',
    paddingHorizontal: '1%',
  },
})
