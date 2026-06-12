import path from "path";

const filepath=path.join(process.cwd(),'./src/databse/db.json');
export const readProduct=()=>{
    console.log(filepath);
}