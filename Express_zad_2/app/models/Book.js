const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/express-blog',  {useNewUrlParser: true, useUnifiedTopology: true});

const schema = new mongoose.Schema ({
    author: String,
    title: String,
    isRead: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
},
{
    timestamps: {updatedAt: 'updated_at', createdAt: 'created_at'}
});
 
module.exports = mongoose.model('Book', schema);