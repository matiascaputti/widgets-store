import React from 'react';
import AppActions from '../actions/app-actions.js';
import Catalog from './app-catalog.js';
import Cart from './app-cart';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Catalog />
                <Cart />
            </div>
        )
    }
}