var request = require("request");
var cheerio = require("cheerio");

module.exports = function(app){
	app.get("/urkel-and-headline", function(req, res){
		request("http://www.cnn.com/", function(err, rrr, body){
			$ = cheerio.load(body);
			var headline = $("h1 a").html();
			console.log(headline);
			//using app.render to capture html for next step
			app.render("urkel", {headline:headline}, function(err, html){
				res.send(html); 
			});
		});
	});
}