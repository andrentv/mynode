import { AppDataSource } from "./data-source";
import { createConnection } from 'typeorm'
import { Users } from "./entity/Users"
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



