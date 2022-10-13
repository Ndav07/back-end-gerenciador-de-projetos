import { InMemoryTasksRepository } from "@modules/tasks/repositories/in-memory/InMemoryTasksRepository";
import { InMemoryProjectsRepository } from "@modules/projects/repositories/in-memory/InMemoryProjectsRepository";
import { InMemoryContributorsRepository } from "@modules/contributors/repositories/in-memory/inMemoryContributorsRepository";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

describe("Create task", () => {
    let inMemoryTasksRepository: InMemoryTasksRepository;
    let inMemoryProjectsRepository: InMemoryProjectsRepository;
    let inMemoryContributorsRepository: InMemoryContributorsRepository;
    let createTaskUseCase: CreateTaskUseCase;

    beforeEach(() => {
        inMemoryTasksRepository = new InMemoryTasksRepository();
        inMemoryProjectsRepository = new InMemoryProjectsRepository();
        inMemoryContributorsRepository = new InMemoryContributorsRepository();
        createTaskUseCase = new CreateTaskUseCase(inMemoryTasksRepository, inMemoryProjectsRepository, inMemoryContributorsRepository);
    });

    it("should be able to create new task", async () => {
        await inMemoryProjectsRepository.create({ name: "Name Project" });
        await inMemoryContributorsRepository.create({ name: "Name Contributor", office: "Office Contributor", team: { id: "1", name: "Name Team" }});
        const task = {
            name: "Name task", 
            description: "Description task", 
            status: "Status task", 
            project: inMemoryProjectsRepository.projects[0].id, 
            contributor: inMemoryContributorsRepository.contributors[0].id
        };
        await createTaskUseCase.execute(task);
        const taskVerification = {
            id: inMemoryTasksRepository.tasks[0].id,
            name: "Name task", 
            description: "Description task", 
            status: "Status task",
            project: inMemoryProjectsRepository.projects[0], 
            contributor: inMemoryContributorsRepository.contributors[0]
        }
        expect(inMemoryTasksRepository.tasks[0]).toEqual(taskVerification);
    });

    it("should be able to create new task without contributor", async () => {
        await inMemoryProjectsRepository.create({ name: "Name Project" });
        const task = {
            name: "Name task", 
            description: "Description task", 
            status: "Status task", 
            project: inMemoryProjectsRepository.projects[0].id
        };
        await createTaskUseCase.execute(task);
        const taskVerification = {
            id: inMemoryTasksRepository.tasks[0].id,
            name: "Name task", 
            description: "Description task", 
            status: "Status task",
            project: inMemoryProjectsRepository.projects[0]
        }
        expect(inMemoryTasksRepository.tasks[0]).toEqual(taskVerification);
    });
});