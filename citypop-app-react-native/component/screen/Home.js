import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import HomePageTitle from './component/titles/HomePageTitle'
import SearchByCityButton from './component/screen/SearchByCity'
import SearchByCountryButton from './component/screen/SearchByCountry'

export default function App() {
  return (
    <View style={styles.container}>
     <HomePageTitle />
      <StatusBar style="auto" />
      <SearchByCityButton />
      <SearchByCountryButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
