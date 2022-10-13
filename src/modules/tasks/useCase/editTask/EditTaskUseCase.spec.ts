import { InMemoryTasksRepository } from "@modules/tasks/repositories/in-memory/InMemoryTasksRepository";
import { InMemoryContributorsRepository } from "@modules/contributors/repositories/in-memory/inMemoryContributorsRepository";
import { EditTaskUseCase } from "./EditTaskUseCase";

describe("Create task", () => {
    let inMemoryTasksRepository: InMemoryTasksRepository;
    let inMemoryContributorsRepository: InMemoryContributorsRepository;
    let editTaskUseCase: EditTaskUseCase;

    beforeEach(() => {
        inMemoryTasksRepository = new InMemoryTasksRepository();
        inMemoryContributorsRepository = new InMemoryContributorsRepository();
        editTaskUseCase = new EditTaskUseCase(inMemoryTasksRepository, inMemoryContributorsRepository);
    });

    it("should be able to edit task", async () => {
        await inMemoryContributorsRepository.create({ name: "Name Contributor", office: "Office Contributor", team: { id: "1", name: "Name Team" }});
        await inMemoryContributorsRepository.create({ name: "Name Contributor Two", office: "Office Contributor Two", team: { id: "1", name: "Name Team" }});
        const task = {
            name: "Name task", 
            description: "Description task", 
            status: "Status task", 
            project: {
                id: "1",
                name: "Name Project"
            },
            contributor: inMemoryContributorsRepository.contributors[0]
        };
        await inMemoryTasksRepository.create(task);
        const editTask = {
            id: inMemoryTasksRepository.tasks[0].id,
            name: "New name task", 
            description: "New description task",
            contributor: inMemoryContributorsRepository.contributors[1].id
        };
        await editTaskUseCase.execute(editTask);
        const taskVerification = {
            id: inMemoryTasksRepository.tasks[0].id,
            name: "New name task", 
            description: "New description task", 
            status: "Status task",
            project: {
                id: "1",
                name: "Name Project"
            },
            contributor: inMemoryContributorsRepository.contributors[1]
        }
        expect(inMemoryTasksRepository.tasks[0]).toEqual(taskVerification);
    });

    it("should be able to edit task without contributor", async () => {
       const task = {
            name: "Name task", 
            description: "Description task", 
            status: "Status task", 
            project: {
                id: "1",
                name: "Name Project"
            }
        };
        await inMemoryTasksRepository.create(task);
        const editTask = {
            id: inMemoryTasksRepository.tasks[0].id,
            name: "New name task", 
            description: "New description task",
        };
        await editTaskUseCase.execute(editTask);
        const taskVerification = {
            id: inMemoryTasksRepository.tasks[0].id,
            name: "New name task", 
            description: "New description task", 
            status: "Status task",
            project: {
                id: "1",
                name: "Name Project"
            },
            contributor: null
        }
        expect(inMemoryTasksRepository.tasks[0]).toEqual(taskVerification);
    });
});