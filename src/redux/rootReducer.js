import { combineReducers } from 'redux'
import newsReucer from './reducers/reducer';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
    news: newsReucer,
    users: usersReducer,
    
});

export default rootReducer;
