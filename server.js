// Require dependencies
var http = require("http");
var fs = require("fs");
var path = require("path");
const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");

const Example = require("./exampleModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });


const app = express();


// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;
Example
  // When we visit different urls, read and respond with different files
  const databaseUrl = "workout";
  const collections = ["exercise"];
  
  const db = mongojs(databaseUrl, collections);
  
  db.on("error", error => {
    console.log("Database Error:", error);
  });
  
  app.get("/", (req, res) => {
    res.send("Hello world");
  });
  
  app.get("/all", (req, res) => {
    db.animals.find({}, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
  });
  
  app.get("/name", (req, res) => {
    db.animals.find().sort({ name: 1 }, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
  });
  
  app.get("/weight", (req, res) => {
    db.animals.find().sort({ weight: -1 }, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
  });
  
  app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  
}

// Sets up the Express App
// =============================================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================

// Basic route that sends the user first to the Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/fitnessTracker/exercise.html"));
});

app.get("/index", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});


  

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
