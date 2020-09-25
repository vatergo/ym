import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Main from './Main';
import Error from './Error';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

function Layout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Switch>
                {navigator.geolocation ? <>
                    <Route path='/main' exact>
                        <Main />
                    </Route>
                    <Redirect to='/main' />
                </>
                    : <>
                        <Route path='/error' exact>
                            <Error />
                        </Route>
                        <Redirect to='/error' />
                    </>}
            </Switch>
        </div>
    );
}

export default Layout;