import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AuthNavigation from './AuthNavigation'
import MainStackNavigator from './MainStackNavigator.js'

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: MainStackNavigator
  },
  {
    initialRouteName: 'Auth'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer
