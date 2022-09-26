import { ITasksRepository, ICreateTaskDTO } from "@modules/tasks/repositories/ITasksRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateTaskUseCase {
    constructor(@inject("TasksRepository") private tasksRepository: ITasksRepository) {}
    async execute({name, description, status, project, contributor}: ICreateTaskDTO): Promise<void> {
        await this.tasksRepository.create({name, description, status, project, contributor});
    }
};

export { CreateTaskUseCase };