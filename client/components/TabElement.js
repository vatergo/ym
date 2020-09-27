import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
    },
    icon: {
        margin: '8px 0',
        height: 32,
        width: 32,
    },
}));

function TabElement({ data }) {
    const classes = useStyles();
    const { applicable_date, weather_state_abbr, min_temp, max_temp } = data;

    return (
        <>
            <Typography variant='caption'>
                {new Date(applicable_date).toLocaleDateString('ru-RU', { weekday: 'short' })}
            </Typography>
            <div
                className={classes.icon}
                style={{ background: `url("https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg")` }}>
            </div>
            <Typography variant='caption'>
                {`${Math.round(min_temp)}°`}<span style={{ color: '#bababa' }}>{` ${Math.round(max_temp)}°`}</span>
            </Typography>
        </>
    );
}

export default TabElement;