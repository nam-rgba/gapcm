import { Router } from "express";
import { authorRouter } from "../modules/basic_crud/author.route";

const router = Router();


// module routes <<<================================================>>>
router.use("/modules/authors", authorRouter);

export default router;