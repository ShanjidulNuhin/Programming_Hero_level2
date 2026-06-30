import type { Request, Response } from "express";
import { pool } from "../../db";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.createUserIntoDB(req.body);
        res.status(201).json({
            message: "Created",
            data: result.rows[0],
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error,
        });
    }
};
const getAllUser = async(req: Request, res:Response)=>{
    try{
        const result = await userService.getAllUserFromDB();
        res.status(200).json({
            success:true;
            message:"Usres fetch successfully",
            data:result.rows,
        });
    }catch(error:any){
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
};

const getSingleUser = async (req:Request, res:Response)=>
{
    try{
        const {id}=req.params;
        const result =await userService.getSingleUserFromDB(Number(id));
        res.status (200).json({
            success:true,
            message:"Sign-in Successfully",
            data:result.rows[0],
        });
    }catch(error:any){
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
};

const updateUser = async(req:Request,res:Response)=>{
    try{
        const {id}=req.params;
        const result = await userService.updateUserIntoDB(
            Number(id),
            req.body
        );
        res.status(200).json({
            success:true,
            message:"User update Successfully",
            data:result.rows[0],
        });
    }catch(error:any){
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

const deleteUser = async (req:Request,res:Response)=>{
    try{
        const{id}=req.params;
        await userService.deleteUserFromDB(Number(id));
        res.status(200).json({
            success:true,
            message:"User Deleted Successfully",
        });
    }catch(error:any){
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

export const userController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
}

