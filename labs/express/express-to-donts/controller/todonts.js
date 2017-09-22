const express = require('express');
const router = express.Router();
const data = require('../data');

/**Index */
router.get('/', (req,res) => {
    res.render('todonts/index',{
        todonts: data.seededToDonts});
  });

/**New */
router.get('/new', (req,res) => {
    res.render('todonts/new');
  });

/**Show */
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todonts = data.seededToDonts[id];
    console.log(todonts);
    if (!todonts){
      res.render('todonts/show', {
        error: "No to-donts found with this ID"
      })
    } else {
      res.render('todonts/show', {todonts})
    }
  });
/**Create */
router.post('/', (req, res) => {
    console.log(req.body);
    const newTodonts = req.body;
    data.seededToDonts.push(newTodonts);
    res.redirect('/todonts');
  });
/**Deleat */
router.delete('/:id', (req, res) => {
    data.seededToDonts.splice(req.params.id, 1); // remove the item from the array

    res.redirect('/todonts');  // redirect back to the index route
});
/**Edit */
router.get('/:id/edit', (req, res) => {
    res.render('todonts/edit', {
      todonts: {
        id: req.params.id,
        description: data.seededToDonts[req.params.id].description,
        urgent: data.seededToDonts[req.params.id].urgent,
      }
    });
  });
/**Update */
router.put('/:id', function(req, res) {
    var toDontsToEdit = data.seededToDonts[req.params.id];
  
    toDontsToEdit.description = req.body.description;
    toDontsToEdit.urgent = req.body.urgent;
  
    res.redirect('/todonts');
  })

module.exports = router;