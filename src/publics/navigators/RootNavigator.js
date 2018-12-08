import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import Contact from '../../contact/screens/Contact';
import ContactCreate from '../../contact/screens/ContactCreate';
import Chat from '../../contact/screens/Chat';

const ContactStack = createStackNavigator({
  Contact: {
    screen: Contact,
    navigationOptions: {
      title: 'Contact List'
    }
  },
  ContactCreate: {
    screen: ContactCreate,
    navigationOptions: {
      title: 'Create'
    }
  }
})

const App = createBottomTabNavigator({
  ContactStack: {
    screen: ContactStack,
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