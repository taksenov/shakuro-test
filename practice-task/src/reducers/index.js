import { combineReducers } from 'redux';
import operatorsFromAPI from './operators';
import operatorSelected from './operatorSelected';

export default combineReducers({
    operatorsFromAPI,
    operatorSelected
});
