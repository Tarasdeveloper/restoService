import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';

const App = ({ total }) => {
    return (
        <div
            style={{
                background: `url(${Background}) center center/cover no-repeat`,
            }}
            className="app"
        >
            <AppHeader total={total} />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/cart" component={CartPage} />
            </Switch>
        </div>
    );
};

const mapStateToProps = ({ items }) => {
    const total = items.reduce((sum, item) => {
        return sum + item.price * item.amount;
    }, 0);

    return { total };
};

export default connect(mapStateToProps)(App);
