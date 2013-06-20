var count = 0;


module.exports = function(app){
	app.get("/viewnum.png", function(req, res){
		count++;
		var viewnum = count;

		var billion = 1000000000;
		var million = 1000000;
		var thousand = 1000;

		if(viewnum>=billion){
			viewnum = viewnum/billion;
			viewnum+=" Billon";
		}

		if(viewnum>=million){
			viewnum = viewnum/million;
			viewnum+=" Million";
		}

		if(viewnum>=thousand){
			viewnum = viewnum/thousand;
			viewnum+=" Thousand";
		}

		res.render("viewnum", {viewnum:viewnum}, function(err, html){

			var opt = {
				screenSize: {
		    	width: 353,
		    	height: 164
		  	},
		  	shotSize: {
		    	width: 353,
		    	height: "all"
		  	},
		  	siteType: "html"
			}


			webshot(html, opt, function(err, renderStream) {
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
}

