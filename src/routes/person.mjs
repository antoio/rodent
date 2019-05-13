import express from 'express';


let router = express.Router();

router.get('/person', (req, res) => {
    res.send('you have requested a person');
});

export default router;