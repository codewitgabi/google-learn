import express, { Express } from "express";
import { config } from "dotenv";
import logger from "morgan";
import AppDataSource from "./datasource/datasource";
// import {
//   NotFoundErrorMiddleware,
//   ServerErrorMiddleware,
// } from "./middlewares/apiError.middleware";
config();

const app: Express = express();
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

// routers

// error middleware

// app.use("*", NotFoundErrorMiddleware);
// app.use(ServerErrorMiddleware);

(async () => {
  AppDataSource.initialize()
    .then(() => {
      app.listen(3000, () => {
        console.log(`Server listening on port ${app.get("port")}`);
      });
    })
    .catch((error) => console.error(error?.message));
})();
