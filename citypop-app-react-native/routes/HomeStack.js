import { createStackNavigator }from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from './screen/Home'
import ReviewDetails from './screen/ReviewDetails'

const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}

const HomeStack = createStackNavigator(screen);