const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",          // ← 네 MySQL 계정에 맞게 변경
    password: "1234",          // ← 너 비밀번호 입력
    database: "movie_site",
    connectionLimit: 10
});

module.exports = pool;
