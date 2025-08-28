import express from "express";
import {
  getAllNotes,
  createNote,
  editNote,
  deleteNote,
} from "../controllers/notesController.js";

const router = express.Router();

// get notes
router.get("/", getAllNotes);

deleteNote;
// create new note
router.post("/", createNote);

// edit note by id
router.put("/:id", editNote);

// delete note by id
router.delete("/:id", deleteNote);

export default router;
