import { createStore,combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import flowyreducer from '../reducers/flowy'
import appreducer from '../reducers/app'
import rootSaga from '../sagas'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const initialState = {};
  const rootReducer = combineReducers({flowy: flowyreducer, app: appreducer})
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware))
  )

  //.runSaga(rootSaga);
  //store.close = () => store.dispatch(END)
  return store
}