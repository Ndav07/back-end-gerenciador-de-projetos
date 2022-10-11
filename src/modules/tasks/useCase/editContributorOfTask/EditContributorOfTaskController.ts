import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditContributorOfTaskUseCase } from "./EditContributorOfTaskUseCase"; 

class EditContributorOfTaskController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { idTask, idContributor } = req.body;
        const editContributorOfTaskUseCase = container.resolve(EditContributorOfTaskUseCase);
        await editContributorOfTaskUseCase.execute(idTask, idContributor);
        return res.status(201).send();
    }
};

export { EditContributorOfTaskController };