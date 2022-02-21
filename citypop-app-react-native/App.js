import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Navigator from '../citypop-app-react-native/routes/HomeStack'

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 90,
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
