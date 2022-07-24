import "reflect-metadata";
import "dotenv/config";
import env from "./config/env";

import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(env.server.port, () =>
  console.log(`🚀 Server is running on port ${env.server.port}`)
);
