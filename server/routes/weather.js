import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.get('/', (req, res) => {
    const { lattlong } = req.query;
    axios.get(`https://www.metaweather.com/api/location/search/?lattlong=${lattlong}`)
        .then(({ data }) => {
            const currentGeo = data[0];
            axios.get(`https://www.metaweather.com/api/location/${currentGeo.woeid}`)
                .then(({ data }) => res.json({
                    weather: data.consolidated_weather,
                    locationType: data.location_type,
                    title: data.title,
                    time: data.time,
                }))
                .catch((er) => {
                    console.error(er);
                    res.status(500).json({
                        message: `Ошибка получения погоды в ${currentGeo.title}`
                    });
                })
        })
        .catch((er) => {
            console.error(er);
            res.status(500).json({
                message: 'Ошибка получения информации о местоположении'
            });
        })
});


export default router;