import { Project } from "@modules/projects/infra/typeorm/entities/Project";
import { IProjectsRepository, ICreateProjectDTO, IEditProjectDTO } from "../IProjectsRepository";

class InMemoryProjectsRepository implements IProjectsRepository {
    projects: Project[] = [];

    async list(): Promise<Project[]> {
        const projects = this.projects;
        return projects;
    }

    async listById(id: string): Promise<Project> {
        const project = this.projects.find(projects => projects.id === id);
        return project;
    }

    async create({ name, team }: ICreateProjectDTO): Promise<void> {
        const project = new Project();
        if(team) {
            Object.assign(project, { name: name, team: team });
            this.projects.push(project);
        } else {
            Object.assign(project, { name: name });
            this.projects.push(project);
        }
    }

    async delete(id: string): Promise<void> {
        this.projects = this.projects.filter(projects => projects.id !== id);
    }

    async editProject({ name, id, team }: IEditProjectDTO): Promise<void> {
        if(team) {
            this.projects.map((projects) => {
                if(projects.id === id) {
                    projects.name = name;
                    projects.team = team;
                }
            });
        } else {
            this.projects.map((projects) => {
                if(projects.id === id) {
                    projects.name = name;
                    projects.team = null;
                }
            });
        }
    }
};

export { InMemoryProjectsRepository };