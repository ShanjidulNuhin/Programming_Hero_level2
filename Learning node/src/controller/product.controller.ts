import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.types";
import { parseBody } from "../utility/parseBody";
import { sendResponse } from "../utility/sendResponse";
import { error } from "console";

export const productController = async (req: IncomingMessage, res: ServerResponse) => {
    console.log("request", req);
    const url = req.url;
    const method = req.method;

    const urlParts = url?.split("/");
    const id = urlParts && urlParts[1] === 'products' ? Number(urlParts[2]) : null;

    //get all products
    if (url === "/products" && method === "GET") {
        try {
            const products = readProduct();
            return sendResponse(res, 200, true, "Products retrieved successfully", products);
        } catch {
            const products = readProduct();
            return sendResponse(res, 500, false, "Something Went wrong", error);
        }

    }

    //get single product
    else if (method === "GET" && id !== null) {
        const products = readProduct();
        const product = products.find((p: IProduct) => p.id === id);

        //if there is no products
        if (!product) {
            return sendResponse(res, 404, false, "Products not found")
        }try{
        return sendResponse(res, 200, true, "Products shown", product);

        }catch{
            return sendResponse(res, 500, false, "Something Went wrong", error);

        }
    }

    //Post method
    else if (method === "POST" && url === '/products') {
        const body = await parseBody(req);
        const products = readProduct();
        const newProduct = {
            id: Date.now(),
            ...body,
        };
        products.push(newProduct)
        insertProduct(products);

        sendResponse(res, 200, true, "Products added", newProduct);
    }
    else if (method === "PUT" && id !== null) {
        const body = await parseBody(req)
        const products = readProduct()

        const index = products.findIndex((p: IProduct) => p.id === id)

        if (index < 0) {
            sendResponse(res, 404, true, "Products not found", null);
        }

        products[index] = { id: products[index].id, ...body };

        insertProduct(products);
        sendResponse(res, 200, true, "Products updated", products[index]);

    }

    //Delete
    else if (method === "DELETE" && id !== null) {
        const products = readProduct()
        const index = products.findIndex(
            (p: IProduct) => p.id === id);
        if (index < 0) {
            sendResponse(res, 200, true, "Products not found", null);

        }

        products.splice(index, 1);
        insertProduct(products);
        sendResponse(res, 200, true, "Products deleted",);

    }
}