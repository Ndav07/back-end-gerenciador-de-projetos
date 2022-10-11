import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditContributorWithoutAvatarUseCase } from "./EditContributorWithoutAvatarUseCase";


class EditContributorWithoutAvatarController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, name, office } = req.body;
        const editContributorWithoutAvatarUseCase = container.resolve(EditContributorWithoutAvatarUseCase);
        await editContributorWithoutAvatarUseCase.execute(id, name, office);
        return res.status(201).send();
    }
};

export { EditContributorWithoutAvatarController };