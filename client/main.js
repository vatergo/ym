import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './pages/Layout';

ReactDOM.render(<Router basename={'/'}>
    <Switch>
        <Route path='/main' exact>
            <Layout />
        </Route>
        <Redirect to='/main' />
    </Switch>
</Router>, document.getElementById('mount-point'));