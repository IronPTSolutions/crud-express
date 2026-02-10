// ==============================================================================
// CONTROLADORES DE COURSE (Patrón MVC: Controller)
// ==============================================================================
// Los controladores contienen la lógica de negocio de la aplicación
// Procesan las peticiones, interactúan con el modelo y devuelven respuestas

import Course from "../models/course.model.js";

// ==============================================================================
// CREATE - Crear un nuevo curso
// ==============================================================================
// Método HTTP: POST
// Endpoint: /api/courses
// Body: { name, duration, instructor, price, level, description }

export async function create(req, res) {
  // Course.create() valida y guarda el documento en MongoDB
  // Si hay errores de validación, Mongoose lanzará un error automáticamente
  const course = await Course.create(req.body);

  // Devolver el curso creado con status 201 (Created)
  res.status(201).json(course);
}

// ==============================================================================
// READ - Listar todos los cursos
// ==============================================================================
// Método HTTP: GET
// Endpoint: /api/courses

export async function list(req, res) {
  // Course.find() sin parámetros devuelve todos los documentos de la colección
  const courses = await Course.find();

  // Devolver el array de cursos con status 200 (OK) por defecto
  res.json(courses);
}

// ==============================================================================
// READ - Obtener un curso específico por ID
// ==============================================================================
// Método HTTP: GET
// Endpoint: /api/courses/:id
// Parámetro: id (ObjectId de MongoDB)

export async function detail(req, res) {
  // Course.findById() busca un documento por su _id
  // req.params.id contiene el ID desde la URL
  const course = await Course.findById(req.params.id);

  // Devolver el curso encontrado (o null si no existe)
  res.json(course);
}

// ==============================================================================
// UPDATE - Actualizar un curso existente
// ==============================================================================
// Método HTTP: PATCH
// Endpoint: /api/courses/:id
// Parámetro: id (ObjectId de MongoDB)
// Body: Campos a actualizar

export async function update(req, res) {
  // Course.findByIdAndUpdate() busca y actualiza el documento
  // Por defecto devuelve el documento ANTES de actualizar
  // Para obtener el actualizado, usar { new: true } como tercer parámetro
  const course = await Course.findByIdAndUpdate(req.params.id, req.body);

  // Devolver el curso actualizado
  res.json(course);
}

// ==============================================================================
// DELETE - Eliminar un curso
// ==============================================================================
// Método HTTP: DELETE
// Endpoint: /api/courses/:id
// Parámetro: id (ObjectId de MongoDB)

export async function remove(req, res) {
  // Course.findByIdAndDelete() busca y elimina el documento
  await Course.findByIdAndDelete(req.params.id);

  // Devolver status 204 (No Content) - operación exitosa sin contenido en la respuesta
  res.status(204).send();
}
