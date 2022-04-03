const express = require('express');
const app = express();

const bookApiRouter = require('./app/api/bookApi');

app.use(express.static('public'));

app.use(express.json());

// API BOOK Routes
app.use('/api/book', bookApiRouter);


app.listen(8080, function(){
    console.log("Serwer Node.js działa");
});

