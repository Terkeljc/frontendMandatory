/**
 * Created by Terkel on 19-10-2016.
 */
var express = require('express'),
    path = require('path'),
    home = require('./routes/home.js');

var app = express();


app.set('views', './views');
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', home.index);


app.listen(3000);