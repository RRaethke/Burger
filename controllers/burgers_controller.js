var express = require("express");
var router = express.Router();

// Import the model (Burger.js) to use its database functions.
var Burger = require("../models/Burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  Burger.all(function(data) {
    var hbsObject = {
      Burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  Burger.create([
    "Burger_name", "devoured"
  ], [
    req.body.Burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  Burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  Burger.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
