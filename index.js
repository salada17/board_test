var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();

//DB setting
mongoose.connect('mongodb://localhost:27017');
var db = mongoose.connection;
db.once("open", function(){
	console.log("DB connected");
});
db.on("error", function(){
	console.log("DB ERROR : ", err);
});

//Other settings
app.set("view engine", "ejs");
app.use(express.static(__dirname+"pubilc"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//routes
app.use("/", require("./routes/home"));
app.use("/posts". require("./routes/posts"));

//port setting
var port = 3500;
app.listen(port, function(){
	console.log("Server on! http://localhost:"+port);
});
