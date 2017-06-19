import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('todos').insertMany([
    { todo: "bushwicks" },
    { todo: "sartorial"}
  ]).then(response => {
    console.info('To Dos', response.insertedCount);
      db.close();
    });
});
