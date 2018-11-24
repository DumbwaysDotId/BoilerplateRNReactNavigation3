import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';

import RootNavigator from '../../navigators/RootNavigator';

const reducerRouter = createNavigationReducer(RootNavigator);

const reducers = combineReducers({
  router: reducerRouter
});

export default reducers;