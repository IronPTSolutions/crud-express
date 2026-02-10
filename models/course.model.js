import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre del curso es obligatorio"],
      minlength: [3, "El nombre debe tener al menos 3 caracteres"],
      maxlength: [100, "El nombre no puede exceder 100 caracteres"],
      trim: true,
    },
    duration: {
      type: String,
      maxlength: 50,
      trim: true,
    },
    instructor: {
      type: String,
      maxlength: 100,
      trim: true,
    },
    price: {
      type: Number,
      min: [0, "El precio debe ser un número positivo"],
    },
    level: {
      type: String,
      enum: {
        values: ["beginner", "intermediate", "advanced"],
        message: "El nivel debe ser: beginner, intermediate o advanced",
      },
    },
    description: {
      type: String,
      maxlength: 500,
    },
  },
  {
    timestamps: true, // Crea automáticamente createdAt y updatedAt
    versionKey: false, // Desactiva el campo __v
  },
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
