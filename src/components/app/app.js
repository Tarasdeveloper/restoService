import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
    return (
        <div
            style={{
                background: `url(${Background}) center center/cover no-repeat`,
            }}
            className="app"
        >
            <AppHeader total={150} />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/cart" component={CartPage} />
            </Switch>
        </div>
    );
};

export default App;
