import { Task } from "@modules/tasks/infra/typeorm/entities/Task";
import { ICreateTaskDTO, IEditTaskDTO, ITasksRepository } from "../ITasksRepository";

class InMemoryTasksRepository implements ITasksRepository {
    tasks: Task[] = [];

    async listByIdProject(id: string): Promise<Task[]> {
        const tasks = this.tasks.filter(tasks => tasks.id === id);
        return tasks;
    }

    async create({ name, description, status, project, contributor }: ICreateTaskDTO): Promise<void> {
        const task = new Task();
        if(contributor) {
            Object.assign(task, { name: name, description: description, status: status, project: project, contributor: contributor });
            this.tasks.push(task);
        } else {
            Object.assign(task, { name: name, description: description, status: status, project: project });
            this.tasks.push(task);
        }
    }

    async delete(id: string): Promise<void> {
        this.tasks = this.tasks.filter(tasks => tasks.id !== id);
    }

    async editStatusOfTask({ id, status }: IEditTaskDTO): Promise<void> {
        this.tasks.map((tasks) => {
            if(tasks.id === id) {
                tasks.status = status;
            }
        });
    }

    async editTask({ id, name, description, contributor }: IEditTaskDTO): Promise<void> {
        if(contributor) {
            this.tasks.map((tasks) => {
                if(tasks.id === id) {
                    tasks.name = name;
                    tasks.description = description;
                    tasks.contributor = contributor;
                }
            });
        } else {
            this.tasks.map((tasks) => {
                if(tasks.id === id) {
                    tasks.name = name;
                    tasks.description = description;
                    tasks.contributor = null;
                }
            });
        }
    }
};

export { InMemoryTasksRepository };