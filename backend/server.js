import express from "express";
import notesRoute from "./src/routes/notesRoute.js";
import { connectDB } from "./src/config/db.js";
import { FRONTEND_URL, NODE_ENV, PORT } from "./src/config/env.js";
import { rateLimiter } from "./src/middleware/rateLimiter.js";
import cors from "cors";
import path from "path";
const app = express();
const __dirname__ = path.resolve();

if (NODE_ENV !== "production") {
  app.use(
    cors({
      origin: [FRONTEND_URL],
    })
  );
}

app.use(express.json());

app.use("/api/notes", rateLimiter, notesRoute);

if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname__, "../frontend/dist")));

  app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname__, "../frontend/dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT || 5001, () => {
    console.log("Server started on port : ", PORT);
  });
});
