var webshot = require("webshot");

module.exports = function(app){
	app.get("/cnn-gets-urkeled", function(req, res){		
		webshot("http://cnn-gets-urkeled.herokuapp.com/urkel-and-headline", function(err, renderStream) {
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
}