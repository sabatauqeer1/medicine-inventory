//packages
import express from "express";
import { db } from "./config/db.js";
import cors from "cors";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import router from "./router/routes.js";

//express application
const app = express();
const PORT = 3001;

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// env variables
configDotenv({ path: "./.env" })

//cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
//headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELTE, PATCH, OPTIONS"
  );
  next();
});
app.use(express.static(path.join(__dirname + "/public")));

app.use(express.json());
app.use(cookieParser());
//routes
app.use("/api/myInventory/", router);
//server
app.listen(PORT, () => {
  db();
  console.log(`server is conenected to db and is listening on ${PORT}`);
});
