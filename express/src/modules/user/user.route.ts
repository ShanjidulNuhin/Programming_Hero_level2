import { Router} from "express";
import { userController } from "./user.controller";

const router =Router()


router.post("/",userController.createUser);
router.get("/",userController.getAllUser);
router.get("/:id",userController.getSingleUser);
router.put("/",userController.updateUser);
router.delete("/",userController.deleteUser);

export const userRout = router;