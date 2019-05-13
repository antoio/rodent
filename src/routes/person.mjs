import express from 'express';
import mongoclient from '../services/dbservice.mjs'

let router = express.Router();

// Querystring, query property on teh request object
// localhost:4200/person?name=thomas&age=20
router.get('/person', (req, res) => {
    if(req.query.name) {
        res.send(`You have requested a person ${req.query.name}`);
    } else {
        res.send('you have requested a person');
    }
});

// Params property on request object
// localhost:4200/person/thomas
router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person ${req.params.name}`);
});

router.get('/error', (req, res) => {
    throw new Error('Now things go bad');
});

export default router;