import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';

import RecordVideoScreen from '../screens/RecordVideoScreen';

const routes = {
  [screens.RecordVideo]: {
    screen: RecordVideoScreen,
  },
};

const ModalNavigator = createStackNavigator(routes);

export default ModalNavigator;