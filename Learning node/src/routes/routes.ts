import type { IncomingMessage, ServerResponse } from "http";

export const routeHandeler=(req:IncomingMessage,res:ServerResponse)=>{
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
}