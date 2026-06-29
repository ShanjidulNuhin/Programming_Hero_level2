import config from "./config";
import express, { type Application, type Request, type Response } from "express";
import { initDB, pool } from "./db";
import { userRout } from "./modules/user/user.route";
import { profileRoute } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";
import fs from "fs";

const app : Application = express()

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))

app.use((req, res, next) => {
  console.log('method - URL - Time:',req.method, req.url ,Date.now());
  const log =`\nMethod -> ${req.method} - Time -> ${Date.now()} - URL -> ${req.url}\n`;
  fs.appendFile('loger.txt',log,(err)=>{
    console.log(err);
  });
  next();
});

app.get('/', (req:Request, res:Response) => {
    res.status(200).json({
        message:"express server",
        "author":"Next Level"
    });
});

app.use("/api/users",userRout);
app.use("/api/profile",profileRoute);
app.use("/api/auth",authRoute);
export default app;