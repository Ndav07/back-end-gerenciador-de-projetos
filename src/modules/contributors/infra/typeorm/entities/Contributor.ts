import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Team } from "../../../../teams/infra/typeorm/entities/Team";

@Entity('contributors')
class Contributor {
    @PrimaryColumn({ type: "uuid" })
    id?: string;

    @Column({ type: "varchar" })
    name: string;

    @ManyToOne(() => Team, team => team.contributors, { cascade: true })
    team: Team;

    @CreateDateColumn({ type: "timestamp", default: "now()" })
    created_at: Date;

    constructor(){
        if(!this.id) {
            this.id = uuidV4();
        } 
    }
};

export { Contributor };