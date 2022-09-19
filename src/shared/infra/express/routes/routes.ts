import { Router } from "express";

import { authenticateRoutes } from "@shared/infra/express/routes/authenticate.route";
import { usersRouter } from "@shared/infra/express/routes/users.route";

const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRouter);

export { router };