import fs from "fs";
import path from "path";

const filepath=path.join(process.cwd(),'./src/database/db.json');
export const readProduct=()=>{
    // console.log(filepath);
    const products=fs.readFileSync(filepath,"utf-8")
    // console.log(products);
    console.log(JSON.parse(products));
    return JSON.parse(products);
};