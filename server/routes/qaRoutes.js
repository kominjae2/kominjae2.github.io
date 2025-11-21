const express = require("express");
const QaRepository = require("../repositories/QaRepository");

const router = express.Router();
const repo = new QaRepository();

// GET /api/qa → 전체 Q&A
router.get("/", (req, res) => {
  res.json(repo.findAll());
});

// POST /api/qa → 새 Q&A 등록
router.post("/", (req, res) => {
  const { name, message } = req.body;

  if (!message || message.trim() === "") {
    return res.status(400).json({ message: "message는 필수입니다." });
  }

  const item = repo.create(name || "익명", message);
  res.status(201).json(item);
});

module.exports = router;
