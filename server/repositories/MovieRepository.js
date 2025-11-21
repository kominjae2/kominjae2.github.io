const Movie = require("../models/Movie");

class MovieRepository {
  constructor() {
    this.movies = [
      new Movie(1, "미션 임파서블", "mission impossible.html", "images/mission.jpg"),
      new Movie(2, "하이파이브", "hi-five.html", "images/hi.jpg"),
      new Movie(3, "릴로 & 스티치", "lilo.html", "images/rill.jpg"),
      new Movie(4, "나를 모르는 그녀의 세계에서", "unknownher.html", "images/she.jpg"),
      new Movie(5, "소주전쟁", "sojuwar.html", "images/soju.jpg"),
    ];
  }

  findAll() {
    return this.movies;
  }

  searchByTitle(keyword) {
    if (!keyword || keyword.trim() === "") {
      return this.movies;
    }
    const lower = keyword.toLowerCase();
    return this.movies.filter(m => m.title.toLowerCase().includes(lower));
  }

  findById(id) {
    return this.movies.find(m => m.id === id);
  }
}

module.exports = MovieRepository;
