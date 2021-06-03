import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';

import MainAppTabNavigator from './MainAppTabNavigator';

const routes = {
  [screens.App]: { screen: MainAppTabNavigator },
};

const MainNavigator = createStackNavigator(routes, {
  headerMode: 'none',
  mode: 'modal',
});

export default MainNavigator;