import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    //https://www.metaweather.com/api/location/search/?lattlong=55.75,37.6167 woeid города из первого запроса во второй
    //https://www.metaweather.com/api/location/2122265/
    console.log(req.query);
    res.json(req.query);
});


export default router;