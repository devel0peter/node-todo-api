const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5af8618250918a075c357751';

// if (!ObjectID.isValid(id)) {
//       return console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((err) => console.log(err));

var userId = '5af83dc0575dfff753a893fe';
User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found');
    }

    console.log('User by Id', user);
}).catch((err) => console.log(err));
