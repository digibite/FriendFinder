var peopleData = require("../data/friend");
// var htmlData = require("../data/htmlRoutes");

module.exports = function(app) {

    app.get("/api/friend", function(req, res) {
        res.json(peopleData);
      });
    
    // app.post("/api/friend", function (req, res) {

    // })
}