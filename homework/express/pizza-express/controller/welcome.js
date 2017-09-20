const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const str = "Welcome to Pizza Express!"
    res.render('index', {
        str: str
    })
})
module.exports = router