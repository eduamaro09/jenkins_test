var express = require('express');
var app = express();

app.get('/',function(req,res) {
    res.send("Hola CI working");
});

app.listen(4000);
