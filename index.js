import express from "express";
//Initialize an express APP

const app = express();
const PORT = 8000;

//Middlewares
app.use(express.json());

app.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "I get the student records",
    data: "Student " + id + " is here in records",
  });
});
app.post("/", (req, res) => {
  res.json({
    message: "I create the student records",
    data: req.body,
  });
});
app.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "I update the student records",
    data: "Student " + id + " is updated",
  });
});
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "I delete the student records",
    data: "Student " + id + " is Deleted",
  });
});
// Start a server
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log("The Server is running at http://localhost:" + PORT);
});
