import express from "express";
import notesRoute from "./src/routes/notesRoute.js";
import { connectDB } from "./src/config/db.js";
import { PORT } from "./src/config/env.js";
import { rateLimiter } from "./src/middleware/rateLimiter.js";
const app = express();

app.use(rateLimiter);

app.use(express.json());

app.use("/api/notes", notesRoute);

connectDB().then(() => {
  app.listen(PORT || 5001, () => {
    console.log("Server started on port : ", PORT);
  });
});
