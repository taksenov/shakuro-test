import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import operatorsMiddleware from './middlewares/operatorsMiddleware';

export default initialState =>
    createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(operatorsMiddleware),
            window.devToolsExtension
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : f => f
        )
    );
