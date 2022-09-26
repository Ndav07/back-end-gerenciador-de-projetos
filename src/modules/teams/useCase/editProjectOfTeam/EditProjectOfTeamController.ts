import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditProjectOfTeamUseCase } from "./EditProjectOfTeamUseCase";

class EditProjectOfTeamController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { idProject, idTeam } = req.body;
        const editProjectOfTeamUseCase = container.resolve(EditProjectOfTeamUseCase);
        await editProjectOfTeamUseCase.execute(idProject, idTeam);
        return res.status(200).send();
    }
};

export { EditProjectOfTeamController };