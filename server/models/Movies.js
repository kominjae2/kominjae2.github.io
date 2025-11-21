// 영화 한 편을 표현하는 백엔드 모델
class Movie {
  constructor(id, title, url, poster) {
    this.id = id;
    this.title = title;   // 한글 제목
    this.url = url;       // 프론트에서 이동할 html 파일
    this.poster = poster; // 이미지 경로
  }
}

module.exports = Movie;
