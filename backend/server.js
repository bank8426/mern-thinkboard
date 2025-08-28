import express from "express";
import notesRoute from "./src/routes/notesRoute.js";
import { connectDB } from "./src/config/db.js";
import { PORT } from "./src/config/env.js";
const app = express();

connectDB();

app.use("/api/notes", notesRoute);

app.listen(PORT || 5001, () => {
  console.log("Server started on port : ", PORT);
});
