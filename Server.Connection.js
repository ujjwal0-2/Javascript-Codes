const http=require("node:http");

const server=http.createServer(function(req,res){
    if(req.url===""){
        res.end("hello World");
    }

});

server.listen(7777);
