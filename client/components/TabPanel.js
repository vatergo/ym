import { Box, makeStyles, Tooltip, Typography } from '@material-ui/core';
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
    smallIcon: {
        height: 32,
        width: 32,
    },
    wind: {
        display: 'flex',
    },
}));

function TabPanel({ value, index, data }) {
    const classes = useStyles();
    const { applicable_date, max_temp, min_temp, the_temp, weather_state_abbr, wind_speed, wind_direction, wind_direction_compass } = data;

    return (
        <div className={classes.root} hidden={value !== index} >
            {value === index && (
                <>
                    <Typography variant='subtitle2'>
                        {new Date(applicable_date).toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                    </Typography>
                    <div className={classes.info}>
                        <div className={classes.currentInfo}>
                            <Typography variant={window.innerWidth < 400 ? 'h4' : 'h2'}>
                                {Math.round(the_temp)}°
                            </Typography>
                            <div
                                className={window.innerWidth < 400 ? classes.smallIcon : classes.icon}
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
                                <Tooltip title={wind_direction_compass}>
                                    <ArrowDownward fontSize="small" style={{ transform: `rotate(${wind_direction}deg)` }} />
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default TabPanel;
