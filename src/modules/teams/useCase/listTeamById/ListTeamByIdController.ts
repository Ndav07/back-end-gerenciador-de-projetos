import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTeamByIdUseCase } from "./ListTeamByIdUseCase";

class ListTeamByIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const listTeamByIdUseCase = container.resolve(ListTeamByIdUseCase);
        const team = await listTeamByIdUseCase.execute(id);
        return res.status(200).json(team);
    }
};

export { ListTeamByIdController };