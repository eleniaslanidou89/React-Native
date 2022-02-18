import { createStackNavigator }from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from './screen/Home'
import SearchByCity from '../component/screen/SearchByCity'
import SearchByCountry from '../component/screen/SearchByCountry'

const screens = {
    Home: {
        screen: Home
    },
    SearchByCity: {
        screen: SearchByCity
    },
    SearchByCountry: {
        screen: SearchByCountry
    }
}

const HomeStack = createStackNavigator(screen)

export default createAppContainer(HomeStack)