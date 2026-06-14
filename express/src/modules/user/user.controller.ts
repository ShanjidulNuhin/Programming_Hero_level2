import type { Request,Response } from "express";
import { pool } from "../../db";
import { userService } from "./user.service";

const createUser=async(req:Request,res:Response)=>{
    // const {name,email,password, age} =;

    try{
        const result =await userService.createUserIntoDB(req.body);
    res.status(201).json({
        message:"Created",
        data:result.rows[0],
    });
    }catch(error){
        res.status(500).json({
        message:(error as Error).message,
        error:error,
    });
    }
};
export const userController={
createUser,
}

