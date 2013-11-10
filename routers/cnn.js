var request = require("request");


module.exports = function(app) {
  app.get("/cnn", function(req, res) {
    request("http://www.cnn.com/", function(err, rrr, body) {
      res.send(body);
    });
  });
}