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

    async findById(id) {
        const [rows] = await pool.query(
            "SELECT * FROM movies WHERE id = ?",
            [id]
        );
        return rows[0] || null;
    }
}

module.exports = MovieRepository;
