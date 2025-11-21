const pool = require("../db");

class CommentRepository {
    async findAll() {
        const [rows] = await pool.query("SELECT * FROM comments ORDER BY id DESC");
        return rows;
    }

    async create(name, message) {
        const [result] = await pool.query(
            "INSERT INTO comments (name, message) VALUES (?, ?)",
            [name, message]
        );
        return {
            id: result.insertId,
            name,
            message,
            created_at: new Date()
        };
    }
}

module.exports = CommentRepository;
