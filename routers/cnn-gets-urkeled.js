var request = require("request");
var cheerio = require("cheerio");
var webshot = require("webshot");

module.exports = function(app){
	app.get("/urkel-and-headline", function(req, res){
		request("http://www.cnn.com/", function(err, rrr, body){
			$ = cheerio.load(body);
			var headline = $("h1 a").html();
			res.render("urkel", {headline:headline})
		});
	});
}