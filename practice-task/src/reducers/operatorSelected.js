import { operatorSelected } from '../actions/selectedOperatorActions';
import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

const operator = handleAction(
    operatorSelected,
    (state, action) => action.payload,
    []
);

export default combineReducers({
    operator
});

export const selectOperator = state => state.operator;
