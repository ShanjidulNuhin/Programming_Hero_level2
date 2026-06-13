import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.types";

export const productController = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    const urlParts = url?.split("/");
    //console.log(urlParts);
    const id = urlParts && urlParts[1] === 'products' ? Number(urlParts[2]) : null;
    //console.log("This is the actual id :", id);

    //get all products
    if (url === "/products" && method === "GET") {
        //     const products=[{
        //         id:1,
        //         name:"No. 1 product",
        //     },
        // ];
        const products = readProduct();
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "This is Products rout", data: products
        })
        );
        //get single product
    }else if(method==="GET"&&id!==null){
                const products = readProduct();
const product = products.find((p:IProduct)=>p.id===id);
// console.log(product);

res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Products shown", data: product
        })
        );
    }
}