import { Router } from "express";

import { CreateUserController } from "@modules/users/useCase/createUser/CreateUserController";

const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post("/", createUserController.handle);

export { usersRouter };