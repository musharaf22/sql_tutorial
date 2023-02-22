import express, { Application, Request, Response } from "express";
import userRoute from "./src/routes";
import db from "./src/models";
const app: Application = express();
const port = 4000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", userRoute);
app.get("/", async (_req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});
(() => {
  db.sequelize.sync().then(() => {
    console.log("Databse Connected Successfully");
  });
})();

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
