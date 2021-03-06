import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Main from './Main';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        justifyContent: 'center',
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
                            <Typography variant="caption" display="block">Ваше устройство не поддерживает GPS</Typography>
                        </Route>
                        <Redirect to='/error' />
                    </>}
            </Switch>
        </div>
    );
}

export default Layout;