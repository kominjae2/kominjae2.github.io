const express = require("express");
const cors = require("cors");

const movieRoutes = require("./routes/movieRoutes");
const commentRoutes = require("./routes/commentRoutes");
const qaRoutes = require("./routes/qaRoutes");

const app = express();
const PORT = 3000;

// CORS 허용 (프론트에서 http://localhost:3000 호출 가능하게)
app.use(cors());

// JSON 요청 파싱
app.use(express.json());

// 라우트 등록
app.use("/api/movies", movieRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/qa", qaRoutes);

// 기본 테스트용
app.get("/", (req, res) => {
  res.send("영화정보사이트 백엔드 서버가 동작 중입니다.");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
