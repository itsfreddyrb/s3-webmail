import { combineReducers } from 'redux';
import messages from './reducers/messages';

const reducers = combineReducers({
    messages,
});

export default reducers;
