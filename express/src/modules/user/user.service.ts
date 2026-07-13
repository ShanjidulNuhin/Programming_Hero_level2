import { pool } from "../../db";
import type { IUser } from "./user.interface";
import bcrypt from "bcryptjs";

const createUserIntoDB =async(payload:IUser)=>{
    const {name,email,password,age,role}=payload;

    //password hashing
    const hashPassword=await bcrypt.hash(password,10);
    
     const result=await pool.query(`
        INSERT INTO users(
        name,email,password,age,role)
        VALUES($1,$2,$3,$4,COALESCE($5,'users'))
        RETURNING *`,
    [name,email,hashPassword,age,role]);
    delete result.rows[0].password;

    return result;
};

const getAllUserFromDB = async()=>{
    const result = await pool.query(`SELECT * FROM users`);
    return result;
}

const getSingleUserFromDB = async(id:number)=>{
    const result = await pool.query(`SELECT * FROM users WHERE id=$1`,[id]);
    return result;
}

const updateUserIntoDB = async(id:number,payload:IUser)=>{
    const {name,email,age} = payload;
    const result = await pool.query(`
        UPDATE users
        SET name=$1, email=$2, age=$3
        WHERE id=$4
        RETURNING *
    `, [name,email,age,id]);
    return result;
}

const deleteUserFromDB = async(id:number)=>{
    await pool.query(`DELETE FROM users WHERE id=$1`,[id]);
}
export const userService ={
    createUserIntoDB,
    getAllUserFromDB,
    getSingleUserFromDB,
    updateUserIntoDB,
    deleteUserFromDB
}