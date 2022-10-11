import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditContributorUseCase } from "./EditContributorUseCase";

class EditContributorController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, name, office } = req.body;
        const avatar = req.file.filename;
        const editContributorUseCase = container.resolve(EditContributorUseCase);
        await editContributorUseCase.execute({id, name, office, avatar});
        return res.status(201).send();
    }
};

export { EditContributorController };