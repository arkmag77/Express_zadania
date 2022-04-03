const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/express-blog',  {useNewUrlParser: true, useUnifiedTopology: true});

const schema = new mongoose.Schema ({
    name: String,
    username: String,
    website: String,
    address: {street: String, suite: String, city: String, zipcode: String}
});
 
module.exports = mongoose.model('User', schema);