import express from "express";
import * as coursesController from "../controllers/course.controller.js";

const router = express.Router();

// Courses routes
router.post("/courses", coursesController.create);
router.get("/courses", coursesController.list);
router.get("/courses/:id", coursesController.detail);
router.patch("/courses/:id", coursesController.update);
router.delete("/courses/:id", coursesController.remove);

export default router;
