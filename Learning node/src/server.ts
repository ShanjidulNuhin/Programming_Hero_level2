import { createServer, IncomingMessage, Server } from "http";
import { routeHandeler } from "./routes/routes";

const server: Server = createServer(
  (req:IncomingMessage,res)=>{
//console.log(req.url);//(/user,/products etc)
//console.log(req.method);//(get,push,put,delete,update,post)
 routeHandeler(req,res)
})
server.listen(5000,()=>{
  console.log("server is running");
})
