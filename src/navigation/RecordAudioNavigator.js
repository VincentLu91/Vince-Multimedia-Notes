import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';

import RecordAudioScreen from '../screens/RecordAudioScreen';

const routes = {
  [screens.RecordAudio]: {
    screen: RecordAudioScreen,
  },
};

const RecordAudioNavigator = createStackNavigator(routes);

export default RecordAudioNavigator;