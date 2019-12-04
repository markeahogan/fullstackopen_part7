import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';
import blogReducer from './reducers/blogReducer';
import notificationReducer from './reducers/notificationReducer';

const reducer = combineReducers({
  blogs:blogReducer,
  notification:notificationReducer
});

const store = createStore(reducer, applyMiddleware(reduxThunk));

export default store;