// ==============================================================================
// MODELO DE DATOS - COURSE (Patrón MVC: Model)
// ==============================================================================
// Este archivo define el esquema y modelo de Course usando Mongoose
// Incluye validaciones automáticas y reglas de negocio

import mongoose from "mongoose";

// ==============================================================================
// DEFINICIÓN DEL ESQUEMA
// ==============================================================================
// El esquema define la estructura de los documentos en la colección 'courses'

const courseSchema = new mongoose.Schema(
  {
    // Campo: Nombre del curso
    name: {
      type: String,
      required: [true, "El nombre del curso es obligatorio"],
      minlength: [3, "El nombre debe tener al menos 3 caracteres"],
      maxlength: [100, "El nombre no puede exceder 100 caracteres"],
      trim: true, // Elimina espacios en blanco al inicio y final
    },

    // Campo: Duración del curso (ej: "40 horas", "3 meses")
    duration: {
      type: String,
      maxlength: 50,
      trim: true,
    },

    // Campo: Nombre del instructor
    instructor: {
      type: String,
      maxlength: 100,
      trim: true,
    },

    // Campo: Precio del curso
    price: {
      type: Number,
      min: [0, "El precio debe ser un número positivo"],
    },

    // Campo: Nivel del curso (principiante, intermedio, avanzado)
    level: {
      type: String,
      enum: {
        values: ["beginner", "intermediate", "advanced"],
        message: "El nivel debe ser: beginner, intermediate o advanced",
      },
    },

    // Campo: Descripción del curso
    description: {
      type: String,
      maxlength: 500,
    },
  },
  {
    // Opciones del esquema
    timestamps: true, // Mongoose añadirá automáticamente createdAt y updatedAt
    versionKey: false, // Desactiva el campo __v que Mongoose usa para control de versiones
  },
);

// ==============================================================================
// CREACIÓN DEL MODELO
// ==============================================================================
// El modelo es una clase que permite interactuar con la colección 'courses' en MongoDB
// Mongoose automáticamente crea la colección en plural y en minúsculas: "courses"

const Course = mongoose.model("Course", courseSchema);

// Exportar el modelo para usarlo en los controladores
export default Course;
