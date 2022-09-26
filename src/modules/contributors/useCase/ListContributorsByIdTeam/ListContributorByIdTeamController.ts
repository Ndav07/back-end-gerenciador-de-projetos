import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListContributorByIdTeamUseCase } from "./ListContributorByIdTeamUseCase";

class ListContributorByIdTeamController {
    async handle(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const listContributorByIdTeamUseCase = container.resolve(ListContributorByIdTeamUseCase);
        const contributors = await listContributorByIdTeamUseCase.execute(id);
        return res.status(200).json(contributors);
    }
};

export { ListContributorByIdTeamController };