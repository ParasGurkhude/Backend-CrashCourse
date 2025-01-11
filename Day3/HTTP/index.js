const http = require("http")
const fs = require('fs')
const PORT = 3000

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.statusCode = 200
        res.write("Welcome to Home Page")
        res.end()
    } else if(req.url == "/aboutus"){
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write("<h3></>Welcome to About Page </h3>")
        res.end()
    } else if(req.url == "/contactus"){
        res.statusCode = 200
        res.setHeader("Content-type", "text/html")
        res.write("<a href='https://www.masaischool.com/'> contact us at www.masaischool.com </a>")
        res.end()
    } else if(req.url == "/index"){
        fs.readFile("./index.js", 'utf-8', (err, data)=>{
            if(err) throw err;
            res.statusCode = 200
            res.write(data)
            res.end()
        }) 
    } else{
        res.statusCode = 404
        res.end("404 Not Found")
    }
})

server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}/`)
})