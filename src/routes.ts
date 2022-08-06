import { Router, Request, Response } from "express";

import {
  getBill,
  saveBill,
  getBills,
  updateBill,
  finishedBill,
  removeBill
} from "./controller/BillController";
import {
  getUser,
  saveUser,
  getUsers,
  updateUser,
  activatedUser,
  removeUser
} from "./controller/UsersController";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello World" });
});

routes.get("/bills", getBills);
routes.get("/bills/:id", getBill);
routes.post("/bills", saveBill);
routes.put("/bills/:id", updateBill);
routes.patch("/bills/:id", finishedBill);
routes.delete("/bills/:id", removeBill);

routes.get("/users", getUsers);
routes.get("/users/:id", getUser);
routes.post("/users", saveUser);
routes.put("/users/:id", updateUser);
routes.patch("/users/:id", activatedUser);
routes.delete("/users/:id", removeUser);


export default routes;
