import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { generateNotes } from "../controllers/generate.controller.js";
import { getMyNotes, getSingleNotes } from "../controllers/notes.controller.js";

const notesRouter = express.Router();

notesRouter.post("/generate-notes", isAuthenticated, generateNotes);
notesRouter.get("/getnotes", isAuthenticated, getMyNotes);
notesRouter.get("/:id", isAuthenticated, getSingleNotes);

export default notesRouter;
