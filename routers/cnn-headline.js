var request = require("request");
var cheerio = require("cheerio");

module.exports = function(app){
	app.get("/cnn-headline", function(req, res){
		request("http://www.cnn.com/", function(err, rrr, body){
			$ = cheerio.load(body);
			var headline = $("h1 a").html();
			res.send(headline);
		});
	});
}