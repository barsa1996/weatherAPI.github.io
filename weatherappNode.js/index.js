const http = require("http");
const fs = require("fs");
var requests = require("requests");
const { listenerCount } = require("events");
const homeFile = fs.readFileSync("home.html", "utf-8");


const server = http.createServer((req, res) => {
    if(req.url== "/") {
        requests(
            "http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}" , { streaming })
           
        .on("data",  (chunk) =>{
            const objdata = JSON.parse(chunk);
            const arrData= [objdata];
            console.log(objdata);
        });
            .on("end", (err) => {
            if (err) return console.log("connection closed due to errors", err);

            console.log("end");
        });
    }
});
server.listen(8000,"127.0.0.1");
