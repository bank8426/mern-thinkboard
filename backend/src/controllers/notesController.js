import Note from "../models/Note.js";
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("error in getAllNotes", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Note.findById(id);

    if (!note)
      return res.status(404).json({
        message: "Note not found",
        id,
      });

    res.status(200).json(note);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid id format",
        id: error.value,
      });
    }

    console.error("error in getAllNotes", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({
      title,
      content,
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("error in createNote", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const editNote = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content } = req.body;

    const result = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!result)
      return res.status(404).json({
        message: "Note not found",
        id,
      });

    res.status(200).json({
      message: "updated",
      success: true,
      result: result,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid id format",
        id: error.value,
      });
    }

    console.error("error in editNote", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Note.findByIdAndDelete(id);

    if (!result)
      return res.status(404).json({
        message: "Note not found",
        id,
      });

    res.status(200).json({
      message: "deleted",
      success: true,
      result: result,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid id format",
        id: error.value,
      });
    }

    console.error("error in deleteNote", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
