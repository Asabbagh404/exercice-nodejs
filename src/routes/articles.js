const express = require('express');

module.exports = () => {
    const router = express.Router();
    const articles = [
        {id: 1, title: 'title one', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sed lacus id accumsan'},
        {id: 2, title: 'title two', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sed lacus id accumsan'},
        {id: 3, title: 'title three', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sed lacus id accumsan'}
    ]
    router.get('/', function(req, res) {
        res.render('articles/index.ejs', {articles: articles});
    });
    router.get('/:id', function(req, res) {
        const article = articles.find((item) => +req.params.id === +item.id);
        res.status(200);
        res.setHeader('Content-Type', 'text/html');
        res.render('articles/single.ejs', { article: article });
    });
    return router;
}
