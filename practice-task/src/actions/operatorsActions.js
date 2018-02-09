import { createActions } from 'redux-actions';

export const {
    operatorsRequest,
    operatorsSuccess,
    operatorsFailure
} = createActions({
    OPERATORS_REQUEST: undefined,
    OPERATORS_SUCCESS: undefined,
    OPERATORS_FAILURE: undefined
});
