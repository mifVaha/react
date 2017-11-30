import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore , applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import bbinfoSaga from './saga/saga';
import { Provider } from "react-redux";
import bbinfoReducer from "./reducers/";
import СategoryList from "./containers/categoriesTree.container";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    bbinfoReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(bbinfoSaga);

ReactDOM.render(
    <Provider store={store}>
        <СategoryList />
    </Provider>,
    document.getElementById("categorylist")
);