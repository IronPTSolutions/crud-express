import Course from "../models/course.model.js";

export async function create(req, res) {
  const course = await Course.create(req.body);
  res.status(201).json(course);
}

export async function list(req, res) {
  const courses = await Course.find();
  res.json(courses);
}

export async function detail(req, res) {
  const course = await Course.findById(req.params.id);
  res.json(course);
}

export async function update(req, res) {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body);
  res.json(course);
}

export async function remove(req, res) {
  await Course.findByIdAndDelete(req.params.id);
  res.status(204).send();
}
