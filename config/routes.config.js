// ==============================================================================
// CONFIGURACIÓN DE RUTAS (Router)
// ==============================================================================
// Este archivo centraliza todas las rutas de la aplicación siguiendo el patrón MVC
// Las rutas actúan como intermediarias entre las peticiones HTTP y los controladores

import express from "express";
import * as coursesController from "../controllers/course.controller.js";

// Crear una instancia del router de Express
const router = express.Router();

// ==============================================================================
// RUTAS DE CURSOS - CRUD COMPLETO
// ==============================================================================
// Cada ruta se asocia con un método del controlador correspondiente

// CREATE - Crear un nuevo curso
// POST /api/courses
router.post("/courses", coursesController.create);

// READ - Listar todos los cursos
// GET /api/courses
router.get("/courses", coursesController.list);

// READ - Obtener un curso específico por ID
// GET /api/courses/:id
router.get("/courses/:id", coursesController.detail);

// UPDATE - Actualizar un curso existente
// PATCH /api/courses/:id
router.patch("/courses/:id", coursesController.update);

// DELETE - Eliminar un curso
// DELETE /api/courses/:id
router.delete("/courses/:id", coursesController.remove);

// Exportar el router para usarlo en app.js
export default router;
