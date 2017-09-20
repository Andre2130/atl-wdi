const express = require('express');
const router = express.Router();

router.get('/:type', (req, res, next) => {
    const str = `${req.params.type} pizza! Good choice.`
        res.render('toppings', {
            str: str
        });

 });
module.exports = router