// ==============================================================================
// CONFIGURACIÓN DE LA BASE DE DATOS (MongoDB con Mongoose)
// ==============================================================================
// Este archivo gestiona la conexión a MongoDB usando Mongoose como ODM

import mongoose from "mongoose";

// URL de conexión a MongoDB
// mongodb://127.0.0.1:27017 - Dirección del servidor MongoDB local
// crud_express_db_2 - Nombre de la base de datos
const MONGODB_URI = "mongodb://127.0.0.1:27017/crud_express_db_2";

// Conectar a MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB exitosamente");
  })
  .catch((err) => {
    console.error("❌ Error al conectar a MongoDB:", err);
    // En producción, podrías querer terminar el proceso si falla la conexión
    // process.exit(1);
  });
