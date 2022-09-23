import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateContributorUseCase } from "./CreateContributorUseCase";

class CreateContributorController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, office, team } = req.body;
        const createContributorUseCase = container.resolve(CreateContributorUseCase);
        await createContributorUseCase.execute({ name, office, team });
        return res.status(200).send();
    }
};

export { CreateContributorController };