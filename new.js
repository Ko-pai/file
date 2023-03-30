const express =require("express");
const https = require("https")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended :true}))

app.get("/",(req,res)=>{
     res.sendFile(__dirname + "/new.html")
})

app.post("/",(req,res) =>{
    const query = req.body.cityName
    const key = "95c3af76a81b47ab8a2193122232903"
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=yes&units=metric`
    https.get(url,(response)=>{
        response.on("data",(data)=>{
            const weatherData = JSON.parse(data)
            
            // "https://cdn.weatherapi.com/weather/64x64/night/116.png"
            const source = weatherData.current.condition.icon
            const temp = weatherData.current.temp_c
            const datee = weatherData.current.condition.text
            res.write(`<h1>${query} temprature is ${temp}`)
            res.write(`<h3>Today data is <i>${datee}</i></h3>`)
            res.write(`<div><img src= ${source} /></div>`)
            
        })
    })
})

app.listen(2500,()=>{
    console.log("Server is running at port 2500");
})