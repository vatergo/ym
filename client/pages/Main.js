import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
    },
}));

function Main() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Главная
        </div>
    );
}

export default Main;