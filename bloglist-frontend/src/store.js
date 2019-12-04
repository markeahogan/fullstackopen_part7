import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';
import blogReducer from './reducers/blogsReducer';
import notificationReducer from './reducers/notificationReducer';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({
  blogs:blogReducer,
  notification:notificationReducer,
  user:userReducer
});

const store = createStore(reducer, applyMiddleware(reduxThunk));

export default store;