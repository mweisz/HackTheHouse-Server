var items = require("./routes/items");
var colors = require("colors");

var express        = require("express"),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),

    app     = express(),
    port    = process.env.PORT || 5006;


app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});


app.post('/item', items.postItem);

app.post('/lastProduct', items.lastProduct);
app.post('/lastId', items.postLastId);
app.post('/weight', items.postWeight);

app.get('/items', items.getItems);
app.get('/items/:id', items.getItemById);
app.get('/consumptions/:userId', items.getConsumptionsByUserId);



var server = app.listen(port, function () {
    console.log('App started on http://%s:%d/', server.address().address, server.address().port);
});


