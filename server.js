const express = require("express")
const bodyparser = require("body-parser")
const hbs = require('hbs')
var app = express()

const port = process.env.PORT || 8080

const imagecode = require("./private/imagegetter.js")
const geocode = require("./private/week7stuff.js")


app.use(express.static(__dirname + "/public"))

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + "/views/partials")

app.get('/', (request, response)=>{
	response.render('front-page.hbs')
})

app.get("/mapsnweather", (request, response) => {
    response.render('mapsnweather.hbs', {
    	menu: '/image',
    	menu_name: "Go for image"
    })
})

app.get("/image", (request, response) => {
    response.render('image.hbs', {
    	menu: '/mapsnweather',
    	menu_name: "Go for weather"
    })
})

app.post("/resources", (request, response) => {
    console.log(request.body)
    var body_content = []
    if (request.body['request-type'] == 'location') {
        location = geocode.getAddress(request.body.msg).then((result)=>{
        	body_content.push(result); })
        weather = location.then((result)=>geocode.getWeather(location.lng, location.lat)).then((result)=>{
        	body_content.push(result);
        	response.json({status:"OK", msg:body_content})
        }).catch((error)=>{response.json({status:"Error", msg:error})})
    }else if(request.body['request-type'] == 'images') {
    	response.json('Hello')
    }
})

app.listen(port, () => {
    console.log("Server Up in " + port)
});