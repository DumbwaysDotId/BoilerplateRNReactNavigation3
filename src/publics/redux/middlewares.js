import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const middlewares = [];
// middleware react navigation
const reactNavigation = createReactNavigationReduxMiddleware(
  'root',
  state => state.router,
);
middlewares.push(reactNavigation);

export default middlewares;