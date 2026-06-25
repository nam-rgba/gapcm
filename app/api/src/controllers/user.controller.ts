import { NextFunction, Request, Response } from "express";
import userService from "~/services/user.service.js";
import { OKResponse } from "~/utils/success.res.js";


class UserController {

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        return new OKResponse(
            "Get users successfully!",
            200,
            await userService.getAll(req.query)
        )
    }
}

const userController = new UserController();
export default userController;