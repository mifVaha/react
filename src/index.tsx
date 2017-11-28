import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import bbinfoReducer from "./reducers/";
import СategoryList from "./containers/categories.container";

let store = createStore(bbinfoReducer);

ReactDOM.render(
    <Provider store={store}>
        <СategoryList />
    </Provider>,
    document.getElementById("categorylist")
);