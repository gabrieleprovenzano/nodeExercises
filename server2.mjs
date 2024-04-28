import { createServer } from "node:http";

const server = createServer((req , res)=> {
    console.log("request received");

    res.statusCode = 200;

    res.setHeader("Content-Type" , "Text/HTML");

    res.end("<html><body><h1>This is my changed message</h1></body></html>")
})

    server.listen(3000 , ()=> {
        console.log("server run on : http://localhost:3000");
    })