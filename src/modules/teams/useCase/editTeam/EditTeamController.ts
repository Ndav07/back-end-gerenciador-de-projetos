import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditTeamUseCase } from "./EditTeamUseCase";

class EditTeamController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, name } = req.body;
        const editTeamUseCase = container.resolve(EditTeamUseCase);
        await editTeamUseCase.execute(id, name);
        return res.status(200).send();
    }
};

export { EditTeamController };