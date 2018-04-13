var express = require("express");
var app = express();
app.use(express.static(__dirname+"/../poc"));

var bodyparser = require("body-parser");
app.use(bodyparser.json());


app.get("/",function (req,res) {
   res.redirect("/contact.html");
});

var mysql = require("mysql");
var mongodb = require("mongodb");

var connection = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"root",
   database:"poc"
});


connection.connect();



app.post("/login" , function (req,res) {
    var uname = req.body.uname;
    var upwd = req.body.upwd;

    console.log(uname+" .."+ upwd);
/*
    if(uname == "admin" && upwd =="admin"){
        res.send({"login":"success"});
    }else{
        res.send({"login":"failure"});
    }*/
   // console.log(connection);
connection.query("select * from login_details where uname='"+uname+"' ",function (err,recordsArray,fields) {
    console.log(err);
    console.log(recordsArray);
    var recLen = recordsArray.length;
    console.log(recLen);
    if(recLen>0){
        res.send({"login":"success"});
    }else{
        res.send({"login":"failure"});
    }
});

});



var mongoClient = mongodb.MongoClient;


app.post("/contact",function (req,res) {
    var uname = req.body.uname;
    var upwd = req.body.upwd;

    mongoClient.connect("mongodb://localhost:27017/poc",function (err,db) {
        db.collection("login_details").insert({'uname':uname,'upwd':upwd});
    });

    res.send({"inserted":"success"});
});


app.listen(5000);
console.log("serverlistening port no 5000");
