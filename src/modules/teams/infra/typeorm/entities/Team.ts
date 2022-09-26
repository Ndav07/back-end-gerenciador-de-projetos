import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Contributor } from "../../../../contributors/infra/typeorm/entities/Contributor";
import { Project } from "../../../../projects/infra/typeorm/entities/Project";

@Entity('teams')
class Team {
    @PrimaryColumn({ type: "uuid" })
    id?: string;

    @Column({ type: "varchar" })
    name: string;

    @OneToOne(() => Project, { nullable: true, onDelete: "SET NULL" })
    @JoinColumn()
    project?: Project;

    @OneToMany(() => Contributor, contributors => contributors.team, { nullable: true })
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