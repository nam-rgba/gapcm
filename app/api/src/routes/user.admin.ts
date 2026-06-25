import { Router } from "express";
import userController from "~/controllers/user.controller.js";
import { validate } from "~/middlewares/validate.js";
import { UserQuery } from "~/repository/user.repository.js";
import AsyncHandler from "~/utils/async-handler.js";

const router = Router();

router.get("/", validate({
    query: UserQuery
}),  AsyncHandler(userController.getAll));




export default router;