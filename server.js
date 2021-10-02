var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host:'localhost',
    //for mac  //port:'8889',
    user:'root', 
    password:'',
    database:'db1'
});

var server = app.listen(4545,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("start");
});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});

// app.get('/manegers',function(req,res){
//     con.query('select * from manegers',function(error,rows,fields){
//         if (error) {
//             console.log(error);
//         }else{ 
//             console.log(rows);
//             res.send(rows);
//         }
//     });
// });

app.get('/store',function(req,res){
    con.query('SELECT * FROM store',function(error,rows,fields){
        if (error) {
            console.log(error);
        }else{ 
           // console.log(rows);
            res.send(rows);
        }
    });
});
app.get('/items',function(req,res){
    con.query('SELECT * FROM items',function(error,rows,fields){
        if (error) {
            console.log(error);
        }else{ 
           // console.log(rows);
            res.send(rows);
        }
    });
});
app.get('/city',function(req,res){
    con.query('SELECT * FROM city',function(error,rows,fields){
        if (error) {
            console.log(error);
        }else{ 
            //console.log(rows);
            res.send(rows);
        }
    });
});
app.get('/categories',function(req,res){
    con.query('SELECT * FROM categories',function(error,rows,fields){
        if (error) {
            console.log(error);
        }else{ 
           // console.log(rows);
            res.send(rows);
        }
    });
});