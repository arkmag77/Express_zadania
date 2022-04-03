const express = require('express');
const app = express();


const hbs = require('express-handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.engine('hbs', hbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

const Post = require('./app/models/Post');

const User = require('./app/models/User');

const post = require('./app/controllers/post.controller');

const user = require('./app/controllers/user.controller');

app.set('views', './views');

app.get('/', function (req, res){
    res.render('home', {
        title: 'Tytuł z Express',
        content: 'Cześć!'
    });

    
});


/* app.get('/mongoose', function (req, res){

   Post.find({title: 'Post drugi'}).lean().exec(function(err, posts){
       console.log(posts);
   })

   let newPost = new Post ({
    title: 'kolejny post',
    content: 'Jestem kolejnym postem',
    isPublic: true
   })

   newPost.save(
       function(err){
           console.log(err);
           console.log("Zapisano post");
       }
   )

   res.send('mongosse uruchomiony');
}); */

app.get('/users', function (req, res){

    user.listUsers(function(err, users){

        if (err) res.send(`Error - ${err} `);
        console.log(users);
        res.render('users', {users});

    });
   
});

app.get('/blog', function (req, res){

    post.list(function(err, posts){

        if (err) res.send(err);
        console.log(posts);
        res.render('blog', {posts});

    });
   
});

app.get('/blog/:id', function (req, res){

    post.get(req.params.id, function(err, post){

        if (err) res.send(err);
        
        res.render('blog', post);

    });
   
});

app.get('/blog/post/add', function (req, res){
        
    res.render('add_post');
   
});

app.post('/blog/post/add', function (req, res){
        
    /* res.send('po wysłaniu formularza'); */
    console.log(req.body);

    post.add(req.body, function(err, post){

        if (err) res.send(err);
        
        res.redirect('/blog');

    });
   
});

app.listen(8080, function(){
    console.log("Serwer Node.js działa");
});

