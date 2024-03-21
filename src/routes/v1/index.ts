import { Router } from "express";
import { authRoutes } from "./auth";
import { userRoutes } from "./user";

const v1Routes: Router = Router();

v1Routes.use("/auth", authRoutes);
v1Routes.use("/user", userRoutes);


export { v1Routes };
