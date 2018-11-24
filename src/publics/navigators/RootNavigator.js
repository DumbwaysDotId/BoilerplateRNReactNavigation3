import {
  createStackNavigator,
} from 'react-navigation';

import App from '../../app/screens/App';

const RootNavigator = createStackNavigator({
  App: {
    screen: App
  }
});

export default RootNavigator;