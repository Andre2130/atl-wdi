//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
var express = require('express');
var router = express.Router();
var Donut= require("../models/donuts");

const DonutsModel = Donut.DonutsModel;

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (request, response) => {
        DonutsModel.find({})
            .then((donuts) => {
                response.render('donuts/index', {
                    donutss: donutss
                })
            })
            .catch((error) => {
                console.log(error)
            })
    
    });


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (request, response) => {

        response.render('donuts/new')
    })

//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (request, response) => {
    
        
        const donutId = request.params.id
    
        DonutsModel.findById(donutId)
            .then((donut) => {

                response.render('donuts/show', {
                    donut: donut
                })
            })
            .catch((error) => {
                console.log(error)
            })
    
    })



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.post('/', (request, response) => {
    
        const newDonut = request.body
    
       
        DonutModel.create(newDonut)
            .then(() => {
               
                response.redirect('/donuts')
            })
            .catch((error) => {
                console.log(error)
            })
    })


//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', (request, response) => {
    
       
        const donutId = request.params.id
    
        DonutModel.findById(donutId)
            .then((donut) => {
    
                response.render('donut/edit', {
                    donut: donut
                })
            })
            .catch((error) => {
                console.log(error)
            })
    
    })


//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', (request, response) => {
    
        const donutIdToUpdate = request.params.id

        const updatedDonut = request.body
    
        DonutModel.findByIdAndUpdate(donutIdToUpdate, updatedDonut, { new: true })
            .then(() => {
    
                response.redirect(`/donuts/${donutIdToUpdate}`)
            })
            .catch((error) => {
                console.log(error)
            })
    })


//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
router.get('/:id/delete', (request, response) => {
    
        const donutId = request.params.id
    
        DonuttModel.findByIdAndRemove(donutId)
            .then((donut) => {
               
                response.redirect('/donuts')
            })
            .catch((error) => {
                console.log(error)
            })
    })


//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;