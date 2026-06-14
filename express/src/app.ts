// import { config } from "dotenv";
import config from "./config";
import express, { type Application, type Request, type Response } from "express";
// import {Pool} from "pg"
import { initDB, pool } from "./db";
const app : Application = express()
// const port = config.port;

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))

app.get('/', (req:Request, res:Response) => {
//   res.send('Hello World!');
    res.status(200).json({
        message:"express server",
        "author":"Next Level"
    });
});

app.post('/',async(req:Request,res:Response)=>{
    // console.log(req.body);
    const {name,email,password, age} =req.body;

    try{
        const result=await pool.query(`
        INSERT INTO users(
        name,email,password,age)
        VALUES($1,$2,$3,$4)
        RETURNING *`,
    [name,email,password,age]);
        console.log(result);

    res.status(201).json({
        message:"Created",
        data:result.rows[0],
    });
    }catch(error){
        res.status(500).json({
        message:"error.message",
        error:error,
    });
    }
});
export default app