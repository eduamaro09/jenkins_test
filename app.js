var express = require('express');
var app = express();

app.get('/',function(req,res) {
    res.send("Helllo Gigigo");
});

app.listen(4000);
