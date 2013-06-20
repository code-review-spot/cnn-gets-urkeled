# CNN Gets Urkeled

Dynamic Images, Static Urls and Configing your Node App for Heroku

## CNN Gets Urkeled -> What we're aiming for

![cnn headline was urkel's fault](http://cnn-gets-urkeled.herokuapp.com/cnn-gets-urkeled.png)

## CNN Gets Urkeled -> Why?

1. Kickstarter: Show what percent of your strech goal you're at
![ghost moc image](http://ks-stretch-goal.herokuapp.com/image/9489dc7a-0559-e15a-76ea-f9ad79cc0d78.png)
2. Emails: Tell people this email has been opened 1,178,576 times!
![viewnums](http://cnn-gets-urkeled.herokuapp.com/viewnum.png)

## CNN Gets Urkeled -> What we need

1. Express
2. Request
3. Cheerio
4. Ejs
5. Webshot (PhantomJS)
	* Canvas (Cairo): another option, requires cairo

## CNN Gets Urkeled -> The Process

1. Simple express app (express)
2. Scrape Cnn.com (request)
3. Get Top Headline (cherrio)
4. Build Html version of CNN Gets Urkeled (ejs)
5. Screen shoot that and serve it as a png (webshot)

## CNN Gets Urkeled -> Push to Heroku

1. Package.json
	* NOTE: "node": "0.10.x" did not work... something with cb() not being called"
2. Profile
	* web: node app.js
3. Heroku Setup
	* Toolbelt
4. Create App
	* Browser vs Toolbelt
5. Publish App
	* Heroku Login
	* git add remote heroku ...
	* git push heroku master