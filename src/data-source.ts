import "reflect-metadata"
import { DataSource } from "typeorm"
import { Bill } from "./entity/Bill"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST_NAME,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Bill],
    migrations: [],
    subscribers: [],
})


