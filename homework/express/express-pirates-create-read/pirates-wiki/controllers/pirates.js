const express = require("express");
const router = express.Router();
const pirates = require("../models/pirates.js")

router.get('/', (req,res) => {
    res.render('pirates/index', {
        pirates: pirates
    })
})
router.get('/new', (req, res) => {
    res.render('pirates/new');
  })
  
  router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pirates = pirates.seededPirate[id];
    console.log(pirates);
    if (!pirates){
      res.render('pirates/show', {
        error: "No pirates found with this ID"
      })
    } else {
      res.render('pirates/show', {pirates})
    }
  });
  
  router.post('/', (req, res) => {
    console.log(req.body);
    const newpirates = req.body;
    pirates.seededPirate.push(newpirates);
    res.redirect('/pirates');
  });

module.exports = router;