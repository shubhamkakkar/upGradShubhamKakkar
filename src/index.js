import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "./store/reducer"

const saveToLocalStorage = state => {
    try {
        const stringifyState = JSON.stringify(state)
        localStorage.setItem("state", stringifyState)
    }
    catch (e) {
        console.log(e)
    } //some privacy concern may lead to prevent the storage to local storage
}

const getFromLocalStorage = () => {
    try {
        const parsedState = localStorage.getItem("state")
        if (parsedState === null) return undefined
        return JSON.parse(parsedState)
    }
    catch (e) {
        console.log(e)
        return undefined //redux accepts either undefined or actual --  null leads to error
    }
}
const persistState = getFromLocalStorage()
const store = createStore(rootReducer, persistState)
store.subscribe(() => saveToLocalStorage(store.getState()))

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
