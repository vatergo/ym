import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    root: {
    },
    tempInfo: {
        display: 'flex',
        alignItems: 'center',
        color: '#202124',
    },
    icon: {
        height: 48,
        width: 48,
    },
}));

function TabPanel({ value, index, data }) {
    const classes = useStyles();
    const { applicable_date, max_temp, min_temp, the_temp, weather_state_abbr, wind_speed, wind_direction_compass } = data;

    return (
        <div hidden={value !== index} >
            {value === index && (
                <>
                    <Typography variant='subtitle2'>
                        {new Date(applicable_date).toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                    </Typography>
                    <div className={classes.tempInfo}>
                        <Typography variant='h2'>
                            {Math.round(the_temp)}°
                        </Typography>
                        <div
                            className={classes.icon}
                            style={{ background: `url("https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg")` }}>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default TabPanel;
