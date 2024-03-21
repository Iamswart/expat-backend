import { Request, Response, Router } from "express";
import asyncHandler from "express-async-handler";
import UserController from "../../controller/user";
import { apiKeyAuthMiddleware, protect } from "../../middleware/auth";


const userRoutes: Router = Router();
const userController = new UserController();

userRoutes.get(
  "/all-users",
  apiKeyAuthMiddleware,
  protect,
  asyncHandler(async (request: Request, response: Response) => {
    const data = await userController.getAllUser();
    response.status(200).json(data).end();
  })
);




export { userRoutes };
