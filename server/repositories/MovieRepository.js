const pool = require("../db");

class MovieRepository {
    async findAll() {
        const [rows] = await pool.query("SELECT * FROM movies");
        return rows;
    }

    async search(keyword) {
        const [rows] = await pool.query(
            "SELECT * FROM movies WHERE LOWER(title) LIKE ?",
            [`%${keyword.toLowerCase()}%`]
        );
        return rows;
    }

    // 🔥 라우터에서 필요한 이름: searchByTitle
    async searchByTitle(title) {
        return this.search(title);   // 기존 함수 재사용 (가장 효율적)
    }

    async findById(id) {
        const [rows] = await pool.query(
            "SELECT * FROM movies WHERE id = ?",
            [id]
        );
        return rows[0] || null;
    }
}

module.exports = MovieRepository;
