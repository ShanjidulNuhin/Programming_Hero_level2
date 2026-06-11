import { createServer, IncomingMessage, Server } from "http";

const server: Server = createServer(
  (req:IncomingMessage,res)=>{
//console.log(req.url);//(/user,/products etc)
//console.log(req.method);//(get,push,put,delete,update,post)
if ( req.url=== "/" && req.method==="GET"){
  res.writeHead(200,{"content-type":"application/json"});
  res.end(JSON.stringify({message:"This is root rout"}));
}
else if(req.url?.startsWith("/products")){
  res.writeHead(200,{"content-type":"application/json"});
  res.end(JSON.stringify({message:"This is Products rout"}));
}
else{
   res.writeHead(404,{"content-type":"application/json"});
  res.end(JSON.stringify({message:"Can not find this rout"}));
}
})
server.listen(5000,()=>{
  console.log("server is running");
})
