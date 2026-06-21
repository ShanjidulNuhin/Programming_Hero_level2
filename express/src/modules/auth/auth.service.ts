import { pool } from "../../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config";

const loginUserDB=async(payload:{
    email:string;
    password:string;
})=>{
    const{email,password}=payload

    //check email exists
    const userData =await pool.query(
        `SELECT * FROM users WHERE email=$1`,
        [email]
        
    );
    if(userData.rows.length===0){
        throw new Error("Invalid user")
    }
    const user = userData.rows[0];
    console.log(user);

    //check and compare the password
    const matchPassword =await bcrypt.compare(password,user.password);
    if (!matchPassword){
throw new Error("Invalid Password")
    }

    //generate token
    const jwtPayload={
        id:user.id,
        name:user.name,
        is_active:user.is_active,
        email:user.email
    }
    const accessToken =jwt.sign(jwtPayload,config.secret as string,{
        expiresIn:"1d",
    });
    return {accessToken};
};
export const authService={
    loginUserDB
}