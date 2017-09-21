const express = require("express");
const router = express.Router();
const data = require("../data.js")

router.get('/', (req,res) => {
  console.log(data);
    res.render('todos/index', {
        todos: data.seededTodos
      });

    });

    router.get('/new', (req, res) => {
        res.render('todos/new');
    })

    router.get('/:id', (req, res) =>{
        const id = parseInt(req.params.id);
        const todo = data.seededTodos[id];

        if (!todo){
            res.render('todos/show', {
                error: "No to-do found with this ID"
            })
        } else{
        res.render('todos/show', {todo})
        const newTodo = req.body;

        data.seededTodos.push(newTodo);
        res.redirect('/todos');
    }
    });

    router.post('/', (req,res) => {
      

    });
    
  module.exports = router;