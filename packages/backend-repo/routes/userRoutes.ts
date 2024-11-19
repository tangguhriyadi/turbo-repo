import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { UserController } from "../controller/userController";

const UserRouter: Router = Router();

UserRouter.get("/fetch-user-data", authMiddleware, UserController.getUserById);
UserRouter.put("/update-user-data", authMiddleware, UserController.updateUser);

export default UserRouter;
