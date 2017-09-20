const express = require('express');
const router = express.Router();

router.get("/:amount/:size", (req, res, next) => {
    const str = `${req.params.amount} ${req.params.size} pizza will be ready in 1 minute`
    res.render('order', {
        str: str
    })
 })
module.exports = router