import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppActions from '../actions/app-actions';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';
import CatalogDetail from './product/app-catalogdetail';
import Template from './app-template';

export default () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Template}>
                <IndexRoute component={ Catalog } />
                <Route path="cart" component={ Cart } />
                <Route path="item/:item" component={ CatalogDetail } />
            </Route>
        </Router>
    )
}