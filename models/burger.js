// Import the Orm to create functions that will interact with the database.
var Orm = require("../config/Orm.js");

var Burger = {
  all: function(cb) {
    Orm.all("Burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    Orm.create("Burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    Orm.update("Burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = Burger;