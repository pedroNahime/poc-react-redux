import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import sagas from '../sagas/app'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composer = process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer()
    ) : applyMiddleware(...middlewares);
const store = createStore(reducers, composer);
sagaMiddleware.run(sagas);

export default store
