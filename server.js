const expresss = require('express');
const hbs = require('hbs');
const port = process.env.port || 3000;

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

app.listen(port, () => {
    console.log(port);
    
});