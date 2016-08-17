
var calculate = require('./calculate');
var path = require('path');

var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
    var x = req.query.x;
    var y = req.query.y;
    var sum = calculate.sum(x, y);
    res.render('index', {x:x, y:y, sum:sum});
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

