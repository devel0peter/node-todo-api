const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

Todo.findByIdAndRemove('5af876e701e31c1983fb4ccf').then((todo) => {
    console.log(todo);
});
