import React, { useState } from 'react';
import { Button, CircularProgress, IconButton, makeStyles, Paper, Tab, Tabs, Tooltip, Typography, withStyles, } from '@material-ui/core';
import axios from 'axios';
import TabPanel from '../components/TabPanel';
import TabElement from '../components/TabElement';
import { Refresh } from '@material-ui/icons';

const CustomTabs = withStyles(() => ({
    indicator: {
        display: 'none',
    },
}))(Tabs);

const CustomTab = withStyles(() => ({
    root: {
        minWidth: 72,
        width: 96,
        borderRadius: 8,
    },
    selected: {
        border: '1px solid #bababa',
    },
}))(Tab);

const useStyles = makeStyles(() => ({
    root: {
        padding: 16,
        color: '#70757a',
        position: 'relative',
        maxWidth: '96vw',
    },
    iconRefresh: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
}));

function Main(props) {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [city, setCity] = useState('Moscow');
    const [currentDay, setCurrentDay] = useState(0);
    const [weatherData, setWeatherData] = useState([]);

    const geoError = (er) => {
        setLoading(false);
        setWeatherData([]);
        switch (er.code) {
            case 1:
                setError(`Ошибка GPS: Доступ запрещен`);
                console.error('Permission denied');
                break;
            case 2:
                setError(`Ошибка GPS: Позиция недоступна`);
                console.error('Position unavailable');
                break;
            case 3:
                setError(`Ошибка GPS: Время вышло`);
                console.error('Timed out');
                break;
            default:
                setError(`Ошибка GPS: Неизвестная ошибка`);
                console.error('Unknown error');
        }
    }

    const getWeatherForecast = () => {
        setLoading(true);
        setError('');
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            axios.get(`/api/weather?lattlong=${coords.latitude},${coords.longitude}`)
                .then(({ data }) => {
                    setCity(data.title);
                    setCurrentDay(0);
                    setWeatherData(data.weather);
                    setLoading(false);
                })
                .catch((er) => {
                    setLoading(false);
                    setWeatherData([]);
                    setError('Произошла ошибка получения информации о погоде');
                    console.error(er)
                });
        }, geoError, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
    }

    return (
        <>
            {(!loading && weatherData.length === 0) && <Button variant="contained" color="primary" disableElevation onClick={getWeatherForecast}>
                Получить прогноз погоды
            </Button>}
            {loading && <CircularProgress />}
            {(!loading && weatherData.length > 0) && <Paper variant="outlined" className={classes.root} >
                <Typography variant="h6">
                    {city}
                </Typography>
                <Tooltip title='Обновить'>
                    <IconButton className={classes.iconRefresh} onClick={getWeatherForecast} size='small'>
                        <Refresh fontSize='inherit' />
                    </IconButton>
                </Tooltip>
                {weatherData.map((item, i) => (
                    <TabPanel value={currentDay} index={i} key={item.id} data={item} />
                ))}
                <CustomTabs
                    value={currentDay}
                    onChange={(e, value) => setCurrentDay(value)}
                    variant="scrollable"
                    scrollButtons="off">
                    {weatherData.map((item) => (
                        <CustomTab key={item.id} label={<TabElement data={item} />} />
                    ))}
                </CustomTabs>
            </Paper>}
            {error && <Typography variant="caption" display="block">{error}</Typography>}
        </>
    );
}

export default Main;