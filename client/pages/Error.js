import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
    },
}));

function Error() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Ошибочка вышла
        </div>
    );
}

export default Error;