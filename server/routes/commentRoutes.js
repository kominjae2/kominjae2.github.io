const express = require("express");
const CommentRepository = require("../repositories/CommentRepository");

const router = express.Router();
const repo = new CommentRepository();

// GET /api/comments → 전체 댓글
router.get("/", (req, res) => {
  res.json(repo.findAll());
});

// POST /api/comments  → 새 댓글 등록
router.post("/", (req, res) => {
  const { name, message } = req.body;

  if (!message || message.trim() === "") {
    return res.status(400).json({ message: "message는 필수입니다." });
  }

  const comment = repo.create(name || "익명", message);
  res.status(201).json(comment);
});

module.exports = router;
