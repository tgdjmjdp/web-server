const expresss = require('express');
const hbs = require('hbs');

var app = expresss();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(expresss.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs');
})

app.get('/product', (req, res) => {
    res.render('product.hbs');
})

app.get('/about', (req, res) => {
    res.render('about.hbs');
})

app.listen(3000);