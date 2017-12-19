import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/App";
import counterApp from "./reducers";

// import Login from "./components/Login/Login";

const store = createStore(counterApp);
const appElement = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    appElement
);

// const appElement = document.getElementById("app");
// ReactDOM.render(
//     <Login/>,
//     appElement
// )