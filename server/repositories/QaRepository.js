const pool = require("../db");

class QaRepository {
    async findAll() {
        const [rows] = await pool.query("SELECT * FROM qa_items ORDER BY id DESC");
        return rows;
    }

    async create(name, message) {
        const [result] = await pool.query(
            "INSERT INTO qa_items (name, message) VALUES (?, ?)",
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

module.exports = QaRepository;
