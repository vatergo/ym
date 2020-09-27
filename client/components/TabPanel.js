import { Box, makeStyles, Typography } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles(() => ({
    root: {
        margin: '8px 0',
    },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    currentInfo: {
        display: 'flex',
        alignItems: 'center',
        color: '#202124',
    },
    icon: {
        height: 48,
        width: 48,
    },
    wind: {
        display: 'flex',
    },
}));

function TabPanel({ value, index, data }) {
    const classes = useStyles();
    const { applicable_date, max_temp, min_temp, the_temp, weather_state_abbr, wind_speed, wind_direction } = data;
    return (
        <div className={classes.root} hidden={value !== index} >
            {value === index && (
                <>
                    <Typography variant='subtitle2'>
                        {new Date(applicable_date).toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                    </Typography>
                    <div className={classes.info}>
                        <div className={classes.currentInfo}>
                            <Typography variant='h2'>
                                {Math.round(the_temp)}°
                            </Typography>
                            <div
                                className={classes.icon}
                                style={{ background: `url("https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg")` }}>
                            </div>
                        </div>
                        <div className={classes.otherInfo}>
                            <Typography variant='body2'>
                                Мин. температура: {Math.round(min_temp)}°
                            </Typography>
                            <Typography variant='body2'>
                                Макс. температура: {Math.round(max_temp)}°
                            </Typography>
                            <div className={classes.wind}>
                                <Typography variant='body2'>
                                    Ветер: {Math.round(wind_speed * 0.44704)} м/с
                                </Typography>
                                <ArrowDownward fontSize="small" style={{ transform: `rotate(${wind_direction}deg)` }} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default TabPanel;
