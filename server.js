var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post('/add',function(req,res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var add = n1+n2;
    res.send('The value is '+ add);
});

app.listen(5500,function(){
    console.log("server started at port 5500");
});