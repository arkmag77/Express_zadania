const User = require('../models/User');

function userList (cb){
    User.find().lean().exec(function(err, users){
        if (err) {
            cb(err);
        } else {
            cb(err, users);
        }
    }) 
}


module.exports = {
    listUsers: userList,
}