const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 5000;

const categories = require("./data/categories.json");

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("categories API Running");
});

app.get("/courses-categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;

  const category_courses = courses.filter(
    (course) => course.category_id === id
  );
  res.send(category_courses);
});

app.get("/course", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course._id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("Courses Server running on port", port);
});
