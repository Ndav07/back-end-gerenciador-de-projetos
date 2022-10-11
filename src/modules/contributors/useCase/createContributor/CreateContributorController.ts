import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateContributorUseCase } from "./CreateContributorUseCase";

class CreateContributorController {
    async handle(req: Request, res: Response): Promise<Response> {
        const contributors = req.body;
        const createContributorUseCase = container.resolve(CreateContributorUseCase);
        for(let j in contributors){
            const { name, office, team } = contributors[j];
            await createContributorUseCase.execute({ name, office, team });
        }
        return res.status(201).send();
    }
};

export { CreateContributorController };