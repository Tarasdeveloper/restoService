import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';

import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundry from './components/error-boundry/error-boundry';
import RestoSerficeContext from './components/resto-service-context/resto-service-context';
import RestoService from './services/resto-service';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoSerficeContext.Provider value={restoService}>
                {/* <BrowserRouter basename="/restoService"> */}
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </RestoSerficeContext.Provider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
