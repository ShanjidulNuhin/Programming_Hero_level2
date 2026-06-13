import { createServer, IncomingMessage, Server } from "http";
import { routeHandeler } from "./routes/routes";
import config from "./config";

const server: Server = createServer(
  (req:IncomingMessage,res)=>{
//console.log(req.url);//(/user,/products etc)
//console.log(req.method);//(get,push,put,delete,update,post)
 routeHandeler(req,res)
})
server.listen(config.port,()=>{
  console.log(`server is running on the port ${config.port}`);
})
