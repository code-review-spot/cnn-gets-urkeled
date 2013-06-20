var request = require("request");
var cheerio = require("cheerio");
var webshot = require("webshot");

module.exports = function(app){
	app.get("/cnn-gets-urkeled", function(req, res){
		request("http://www.cnn.com/", function(err, rrr, body){
			$ = cheerio.load(body);
			var headline = $("h1 a").html();
			console.log(headline);
			//using app.render to capture html for next step
			app.render("urkel", {headline:headline}, function(err, html){
				webshot(html, {siteType: "html"}, function(err, renderStream) {
					var img = "";

					renderStream.on("data", function(data){
						img+=data.toString('binary');
					});

					renderStream.on("end", function(){
						res.writeHead(200, {'Content-Type': 'image/png' });
  					res.end(img, 'binary');
					});

				});
			});
		});
	});
}