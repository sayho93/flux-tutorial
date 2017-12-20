import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Switch, Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from "./components/App";
import Home from "./components/Home";

// import {createStore} from "redux";
// import {Provider} from "react-redux";
// import counterApp from "./reducers";

// const store = createStore(counterApp);

// const appElement = document.getElementById("app");

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     appElement
// );

{/*<Route path="home" component={Home}/>*/}
const appElement = document.getElementById("app");
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/home" component={Home}/>
    </Router>,
    appElement
);