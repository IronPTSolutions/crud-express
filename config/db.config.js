import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/crud_express_db_2")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.error("error connecting to mongodb", err);
  });
