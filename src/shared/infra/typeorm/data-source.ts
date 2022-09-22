import { DataSource } from "typeorm";

export const PostgresConnectDataBase = new DataSource({
    type: "postgres",
    host: "kesavan.db.elephantsql.com",
    port: 5432,
    username: "furcgnrs",
    password: "del6rfgoHRu871R3JP-hwVVckwVCh-7c",
    database: "furcgnrs",
    entities: ["./src/modules/**/infra/typeorm/entities/*.{ts,js}"],
    migrations: ["./src/shared/infra/typeorm/migrations/*.{ts,js}"]
})