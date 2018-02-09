import {
    operatorsRequest,
    operatorsSuccess,
    operatorsFailure
} from '../actions/operatorsActions';
import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

const operators = handleAction(
    operatorsSuccess,
    (state, action) => action.payload,
    []
);

const error = handleAction(
    operatorsFailure,
    (state, action) => action.error,
    null
);

const isFetching = handleActions(
    {
        [operatorsRequest]: () => true,
        [operatorsSuccess]: () => false,
        [operatorsFailure]: () => false
    },
    false
);

const isFetched = handleActions(
    {
        [operatorsRequest]: () => false,
        [operatorsSuccess]: () => true,
        [operatorsFailure]: () => true
    },
    false
);

export default combineReducers({
    error,
    operators,
    isFetched,
    isFetching
});

export const getOperators = state => state.operators;
export const getIsFetching = state => state.isFetching;
export const getIsFetched = state => state.isFetched;
export const getError = state => state.error;
