//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirates: showPirate
	});
});


//==============================
// CREATE
//==============================
router.post('/', (req, res) => {
    console.log(req.body);
    const newPirates = req.body;
    pirates.seededpirates.push(newPirates);
    res.redirect('/pirates');
  });
//==============================
// UPDATE
//==============================
router.put('/:id', function(req, res) {
    var todoToEdit = pirates.seededpirates[req.params.id];
  
    todoToEdit.description = req.body.description;
    todoToEdit.urgent = req.body.urgent;
  
    res.redirect('/pirates');
  })
//==============================
// DESTROY
//==============================
router.delete('/:id', (req, res) => {
    pirates.seededpirates.splice(req.params.id, 1); // remove the item from the array

    res.redirect('/pirates');  // redirect back to the index route
});
//==============================
// EXPORTS
//==============================
router.get('/:id/edit', (req, res) => {
    res.render('pirates/edit', {
      pirates: {
        id: req.params.id,
        name: pirates.seededpirates[req.params.id].name,
        birthplace: pirates.seededpirates[req.params.id].birthplace,
        death_year: pirates.seededpirates[req.params.id].death_year,
        base: pirates.seededpirates[req.params.id].base,
        nickname: pirates.seededpirates[req.params.id].nickname,
      }
    });
  });

module.exports = router;