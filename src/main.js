const express = require('express');
const path = require('path');
const server = express();
const port = 3000;

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '/views'));

server.use('/js', express.static(__dirname + '/public/js'));
server.use('/css', express.static(__dirname + '/public/css'));
server.use('/img', express.static(__dirname + '/public/img'));

server.use('/articles', require('./routes/articles')());

server.use('/', (req, res) => {
    res.send('Error, no route match current url');
});

server.listen(port, () => {
   console.log('server start on port ' + port)
});
