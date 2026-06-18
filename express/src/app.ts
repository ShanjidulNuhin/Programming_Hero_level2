import config from "./config";
import express, { type Application, type Request, type Response } from "express";
import { initDB, pool } from "./db";
import { userRout } from "./modules/user/user.route";
import { profileRoute } from "./modules/profile/profile.route";
const app : Application = express()

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))

app.get('/', (req:Request, res:Response) => {
    res.status(200).json({
        message:"express server",
        "author":"Next Level"
    });
});

app.use("/api/users",userRout);
app.use("/api/profile",profileRoute);

export default app;