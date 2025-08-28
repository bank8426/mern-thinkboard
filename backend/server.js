import express from "express";

const PORT = 5001;
const app = express();

// get notes
app.get("/api/notes", (req, res) => {
  res.status(200).send("you got 5 notes");
});

// create new note
app.post("/api/notes", (req, res) => {
  res.status(201).send("you create new note");
});

app.listen(PORT, () => {
  console.log("Server started on port : ", PORT);
});
