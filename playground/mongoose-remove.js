const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5bc7a707bbf0c6b97bde1581'}).then((todo) => {

});

Todo.findByIdAndRemove('5bc7a707bbf0c6b97bde1581').then((todo) => {
  console.log(todo);
});
