import { DataSource } from "typeorm";

const PostgresConnectDataBase = new DataSource({
    type: "postgres",
    host: "kesavan.db.elephantsql.com",
    port: 5432,
    username: "ibkasbxq",
    password: "8k48ScREc2xgd6n0qmS80PI8_Q1vse19",
    database: "ibkasbxq",
    entities: ["./src/modules/**/infra/typeorm/entities/*.{ts,js}"],
    migrations: ["./src/shared/infra/typeorm/migrations/*.{ts,js}"]
})