import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';

import RootNavigator from '../../navigators/RootNavigator';
import contact from './contact';

const reducerRouter = createNavigationReducer(RootNavigator);

const reducers = combineReducers({
  router: reducerRouter,
  contact: contact
});

export default reducers;