import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditTeamOfProjectUseCase } from "./EditTeamOfProjectUseCase";

class EditTeamOfProjectController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { idProject, idTeam } = req.body;
        const editTeamOfProjectUseCase = container.resolve(EditTeamOfProjectUseCase);
        await editTeamOfProjectUseCase.execute(idProject, idTeam);
        return res.status(200).send();
    }
};

export { EditTeamOfProjectController };