var webshot = require("webshot");

module.exports = function(app) {
  app.get("/cnn-gets-urkeled.png", function(req, res) {

    var opt = {
      screenSize: {
        width: 430,
        height: 352
      },
      shotSize: {
        width: 430,
        height: 'all'
      }
    }

    webshot("http://cnn-gets-urkeled.herokuapp.com/urkel-and-headline", opt, function(err, renderStream) {
      var img = "";

      renderStream.on("data", function(data) {
        img += data.toString('binary');
      });

      renderStream.on("end", function() {
        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        res.end(img, 'binary');
      });

    });
  });
}