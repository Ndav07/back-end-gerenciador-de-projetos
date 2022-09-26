import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditContributorUseCase } from "./EditContributorUseCase";

class EditContributorController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, name, office, avatar } = req.body;
        const  editContributorUseCase = container.resolve(EditContributorUseCase);
        await editContributorUseCase.execute(id, name, office, avatar);
        return res.status(200).send();
    }
};

export { EditContributorController };