import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Contributor } from "../../../../contributors/infra/typeorm/entities/Contributor";
import { Project } from "../../../../projects/infra/typeorm/entities/Project";

@Entity('teams')
class Team {
    @PrimaryColumn({ type: "uuid" })
    id?: string;

    @Column({ type: "varchar" })
    name: string;

    @OneToOne(() => Project, project => project.team)
    project: Project;

    @OneToMany(() => Contributor, contributors => contributors.team, { nullable: true, cascade: true })
    contributors?: Contributor[];

    @CreateDateColumn({ type: "timestamp", default: "now()" })
    created_at: Date;

    constructor(){
        if(!this.id) {
            this.id = uuidV4();
        } 
    }
};

export { Team };