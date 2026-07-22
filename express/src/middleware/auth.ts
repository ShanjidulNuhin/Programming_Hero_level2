import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import { pool } from "../db";
import type { ROLES } from "../types";


const auth = (...roles: ROLES[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try{
        
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access"
            });
        }

        const decoded = jwt.verify(
            token as string, config.secret as string,
        ) as jwt.JwtPayload;
        // console.log(decoded);
        const userData = await pool.query(`SELECT * FROM users WHERE email=$1`,
            [decoded.email]);
       
        console.log(userData);

        const user = userData.rows[0];

        if (userData.rows.length === 0) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        if(!user?.is_active){
             res.status(403).json({
                success: false,
                message: "User is not active"
            });
        } 
        if (roles.length && !roles.includes(user.role)) {
             res.status(403).json({
                success: false,
                message: "Insufficient permissions"
            });
        }
        req.user=decoded;
        next();
      }catch (error) {
        next(error);
      }
    };
}
export default auth;