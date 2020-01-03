
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const render = () => {
    ReactDOM.render(
        <div className="container">
            <Provider store={store}>
                <App />
            </Provider>
        </div>,
        document.getElementById('root'));
};

render();
store.subscribe(render);