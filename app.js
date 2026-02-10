// ==============================================================================
// CONFIGURACIÓN PRINCIPAL DE LA APLICACIÓN EXPRESS
// ==============================================================================
// Este es el punto de entrada de la aplicación siguiendo el patrón MVC

// Importación de dependencias principales
import express from "express";
import logger from "morgan"; // Middleware para logging de peticiones HTTP

// Importar configuración de base de datos
// Este import ejecuta la conexión a MongoDB automáticamente
import "./config/db.config.js";

// Crear la instancia de la aplicación Express
const app = express();

// ==============================================================================
// MIDDLEWARES GLOBALES
// ==============================================================================

// Morgan: registra todas las peticiones HTTP en consola (útil para desarrollo)
app.use(logger("dev"));

// Express JSON: permite recibir y parsear el body de las peticiones en formato JSON
app.use(express.json());

// ==============================================================================
// CONFIGURACIÓN DE RUTAS (Router)
// ==============================================================================

// Importar el router centralizado que contiene todas las rutas de la aplicación
import router from "./config/routes.config.js";

// Montar el router en el prefijo /api
// Todas las rutas estarán disponibles bajo /api/*
app.use("/api", router);

// ==============================================================================
// INICIAR EL SERVIDOR
// ==============================================================================

// Levantar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Ready! on port 3000");
});
