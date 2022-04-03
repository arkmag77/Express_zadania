const express = require("express");
const router = express.Router();
 
const book = require('../controllers/book.controller');


router.get('/all', function (req, res){

    book.list(function(err, books){

        if (err) {
            res.status(404);
            res.json({
               error:  'Books not found'
            });
        } else {

            res.json(books);
        }
    });
   
});

router.get('/all/read', function (req, res){

    book.listRead(function(err, books){

        if (err) {
            res.status(404);
            res.json({
               error:  'Books not found'
            });
        } else {

            res.json(books);
        }
    });
   
});

router.get('/all/unread', function (req, res){

    book.listUnread(function(err, books){

        if (err) {
            res.status(404);
            res.json({
               error:  'Books not found'
            });
        } else {

            res.json(books);
        }
    });
   
});

router.get('/:id', function (req, res){

    book.get(req.params.id, function(err, book){

        if (err) {
            res.status(404);
            res.json({
               error:  'Book not found'
            });
        } else {
            res.json(book);
        }

    });
   
});


router.post('/add', function (req, res){
        
    
    /* console.log(req.body); */

    book.add(req.body, function(err, book){

        if (err) {
            res.status(404);
            res.json({
               error:  'Book not created'
            });
        } else {
            res.json(book);
        }

    });
   
});


router.put('/update/:id', function(req, res){
 
    book.update(req.params.id, req.body, function(err, data){
        if (err) {
            res.status(404);
            res.json({
               error:  'Book not found'
            });
        } else {
            res.json(data);
        }
    });
     
});


router.delete('/delete/:id', function(req, res){
     
    book.delete(req.params.id, function(err, data){
        if (err) {
            res.status(404);
            res.json({
               error:  'Book not found'
            });
        } else {
            res.json(data);
        }
    });
     
});

module.exports = router;