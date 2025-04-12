import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import WithRestoService from '../hoc/with-resto-service';

const App = ({ RestoService }) => {
    console.log(RestoService.getMenuItems());
    return (
        <div
            style={{
                background: `url(${Background}) center center/cover no-repeat`,
            }}
            className="app"
        >
            <AppHeader total={50} />
            <MainPage />
            <CartPage />
        </div>
    );
};

export default WithRestoService()(App);
