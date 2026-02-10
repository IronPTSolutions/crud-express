import express from "express";
import logger from "morgan";
import "./config/db.config.js";

const app = express();
app.use(logger("dev"));
app.use(express.json());

// Routes
import router from "./config/routes.config.js";
app.use("/api", router);

app.listen(3000, () => {
  console.log("Ready! on port 3000");
});
