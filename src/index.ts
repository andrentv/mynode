//import "reflect-metadata"
//import { DataSource } from 'typeorm'
import { AppDataSource } from "./data-source";
import { createConnection } from 'typeorm'
// import { User } from "./entity/User"
import { Bill } from "./entity/Bill"
import * as bodyParser from 'body-parser';
import * as cors from 'cors'
import * as express from 'express';
import routes from './routes';

const app = express()
createConnection()
app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(3333)


/*
AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const bill = new Bills()
    bills.title = "compra"
    await AppDataSource.manager.save(bill)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Bill)
    console.log("Loaded bills: ", bills)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))


// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

*/
