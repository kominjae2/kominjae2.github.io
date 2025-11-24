const express = require("express");
const MovieRepository = require("../repositories/MovieRepository");

const router = express.Router();
const repo = new MovieRepository();

// GET /api/movies?q=검색어 → 전체/검색
router.get("/", async (req, res) => {
  try {
    const q = req.query.q || "";
    const result = await repo.searchByTitle(q);   // await 추가
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "영화 검색 중 오류 발생" });
  }
});

// GET /api/movies/:id → 개별 영화
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const movie = await repo.findById(id);   // await 추가

    if (!movie) {
      return res.status(404).json({ message: "영화를 찾을 수 없습니다." });
    }

    res.json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "영화 조회 중 오류 발생" });
  }
});

module.exports = router;
