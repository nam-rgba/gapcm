import express, { Request, Response } from "express";
import { authorRouter } from "./src/modules/basic_crud/author.route";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/authors", authorRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "all good" });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
