// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bb1730daa38c01735c82597')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // Update name and increment age
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bafc8f78724ca699b2e50ae')
  }, {
    $set: {name: 'Jane'},
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //client.close();
});
