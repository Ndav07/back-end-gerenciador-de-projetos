import { Request, Response } from "express";
import { container } from "tsyringe";

import { RemoveContributorOfTaskUseCase } from "./RemoveContributorOfTaskUseCase";

class RemoveContributorOfTaskController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        const removeContributorOfTaskUseCase = container.resolve(RemoveContributorOfTaskUseCase);
        await removeContributorOfTaskUseCase.execute(id);
        return res.status(200).send();
    }
};

export { RemoveContributorOfTaskController };