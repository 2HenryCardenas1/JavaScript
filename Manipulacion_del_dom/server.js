const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1> Hola mundo, desde un server con node JS");
});

server.listen(3000,() => {
    console.log("server listening on port 3000");
})