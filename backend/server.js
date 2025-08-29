import express from "express";
import notesRoute from "./src/routes/notesRoute.js";
import { connectDB } from "./src/config/db.js";
import { FRONTEND_URL, PORT } from "./src/config/env.js";
import { rateLimiter } from "./src/middleware/rateLimiter.js";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: [FRONTEND_URL],
  })
);

app.use(rateLimiter);

app.use(express.json());

app.use("/api/notes", notesRoute);

connectDB().then(() => {
  app.listen(PORT || 5001, () => {
    console.log("Server started on port : ", PORT);
  });
});
