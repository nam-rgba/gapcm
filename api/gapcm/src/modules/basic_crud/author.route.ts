import { Router } from "express";
import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
} from "./author.controller";

export const authorRouter = Router();

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:id", getAuthorById);
authorRouter.post("/", createAuthor);
authorRouter.patch("/:id", updateAuthor);
authorRouter.delete("/:id", deleteAuthor);
