const express = require("express");
const MovieRepository = require("../repositories/MovieRepository");

const router = express.Router();
const repo = new MovieRepository();

// GET /api/movies?q=검색어  → 전체/검색
router.get("/", (req, res) => {
  const q = req.query.q || "";
  const result = repo.searchByTitle(q);
  res.json(result);
});

// GET /api/movies/:id → 개별 영화
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const movie = repo.findById(id);
  if (!movie) {
    return res.status(404).json({ message: "영화를 찾을 수 없습니다." });
  }
  res.json(movie);
});

module.exports = router;
