import express from "express";
import notesRoute from "./routes/notesRoute.js";

const PORT = 5001;
const app = express();

app.use("/api/notes", notesRoute);

app.listen(PORT, () => {
  console.log("Server started on port : ", PORT);
});
