const express = require("express");
const cors = require("cors");

const movieRoutes = require("./routes/movieRoutes");
const commentRoutes = require("./routes/commentRoutes");
const qaRoutes = require("./routes/qaRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/movies", movieRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/qa", qaRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
