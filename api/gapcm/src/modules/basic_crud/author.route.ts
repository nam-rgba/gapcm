import { Router } from "express";
import {
  authorController
} from "./author.controller";
import AsyncHandler from "../../utils/async-handler";
import { validate } from "../../middlewares/validate";
import { AuthorInsertSchema } from "./author.schema";

export const authorRouter = Router();

authorRouter.get("/", AsyncHandler(authorController.getAll));
authorRouter.get("/:id", AsyncHandler(authorController.getOne));
authorRouter.post("/",validate({body: AuthorInsertSchema}), AsyncHandler(authorController.create));
authorRouter.patch("/:id", AsyncHandler(authorController.update));
authorRouter.delete("/:id", AsyncHandler(authorController.delete));
