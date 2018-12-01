import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import Contact from '../../contact/screens/Contact';
import Chat from '../../contact/screens/Chat';


const App = createBottomTabNavigator({
  Contact: {
    screen: Contact,
    navigationOptions: {
      title: 'Contact'
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      title: 'Chat'
    }
  },
  Setting: {
    screen: Contact,
    navigationOptions: {
      title: 'Setting'
    }
  }
})

const RootNavigator = createStackNavigator({
  App: {
    screen: App
  }
},
{
  headerMode: 'none'
});

export default createAppContainer(RootNavigator);