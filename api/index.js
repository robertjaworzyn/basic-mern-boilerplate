import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

//initialise mongo
let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});

const router = express.Router();

//fetch all todo items from database
router.get('/todos', (req, res) => {
  //initialise empty array
  let todos = [];
  //mongo finds all items in todos collection
  mdb.collection('todos').find({})
    .each((err, todo) => {
      assert.equal(null,err);

      if(!todo) {
        res.send({ todos });
        return;
      }

      todos.push(todo);

    })
});

//post new item to database
router.post('/addTodo', (req, res) => {
  const newTodo = req.body.newItem;
  //insert item from req.body into todos collection
  mdb.collection('todos').insertOne({todo: newTodo})
      .then(result => {
        assert.equal(1,result.insertedCount);
        //send the new item in database back to front end
        res.send({newItem: {_id: result.insertedId, todo: newTodo}});
      });

});

router.post('/deleteTodo', (req, res) => {
  const todo = req.body.item.todo;
  const id = ObjectID(req.body.item._id);
  mdb.collection('todos').remove({_id: id, todo: todo}, true)
      .then(result => {
        res.send("ALL GOOD");
        // assert.equal(1,result.removedCount);
      });

});





export default router;
