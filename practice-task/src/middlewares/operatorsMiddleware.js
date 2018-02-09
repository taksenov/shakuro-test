import {
    operatorsRequest,
    operatorsSuccess,
    operatorsFailure
} from '../actions/operatorsActions';
import { mobileOperatorsList } from '../api';

export default store => next => action => {
    if (action.type === operatorsRequest.toString()) {
        mobileOperatorsList(action.payload)
            .then(operators => {
                store.dispatch(operatorsSuccess(operators));
            })
            .catch(error => {
                store.dispatch(operatorsFailure(error));
            });
    }
    return next(action);
};
