import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.types";
import { parseBody } from "../utility/parseBody";

export const productController = async(req: IncomingMessage, res: ServerResponse) => {
    console.log("request",req);
    const url = req.url;
    const method = req.method;

    const urlParts = url?.split("/");
    const id = urlParts && urlParts[1] === 'products' ? Number(urlParts[2]) : null;

    //get all products
    if (url === "/products" && method === "GET") {
        const products = readProduct();
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "This is Products rout", data: products
        })
        );
        
    } 

    //get single product
    else if (method === "GET" && id !== null) {
        const products = readProduct();
        const product = products.find((p: IProduct) => p.id === id);
        // console.log(product);

        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Products shown", data: product
        })
        );
    }

    //Post method
    else if (method === "POST" && url === '/products') {
        const body =await parseBody(req);
        // console.log("Body",body);
        const products=readProduct();
        const newProduct={
            id:Date.now(),
            ...body,
        };
        products.push(newProduct)
        // console.log(products);
        insertProduct(products);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Products added", data: products
        })
        );
    }
}