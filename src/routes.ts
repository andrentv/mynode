import { Router, Request, Response } from "express";

import {
  getBill,
  saveBill,
  getBills,
  updateBill,
  finishedBill,
  removeBill,
} from "./controller/BillController";

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

export default routes;
