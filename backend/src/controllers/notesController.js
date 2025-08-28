export const getAllNotes = (req, res) => {
  res.status(200).send("you got 5 notes");
};

export const createNote = (req, res) => {
  res.status(201).json({
    message: "created",
    success: true,
  });
};

export const editNote = (req, res) => {
  res.status(200).json({
    message: "updated",
    success: true,
  });
};

export const deleteNote = (req, res) => {
  res.status(200).json({
    message: "deleted",
    success: true,
  });
};
