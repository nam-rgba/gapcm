import { Router } from "express";
import { validate } from "~/middlewares/validate.js";
import { AuthorQuery } from "~/repository/user.repository.js";

const router = Router();

router.use("/", validate({
    query: AuthorQuery
}), )