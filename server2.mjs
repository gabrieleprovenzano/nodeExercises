import { createServer } from "node:http";

const server = createServer((req , res)=> {
    console.log("request received");

    res.statusCode = 200;

    res.setHeader("Content-Type" , "Text/HTML");

    const responseBody = JSON.stringify({location: "Mars"})

    res.end(responseBody)
})

    server.listen(3000 , ()=> {
        console.log("server run on : http://localhost:3000");
    })