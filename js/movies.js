// 영화 데이터 구조
class Movie {
    constructor(title, url, poster) {
        this.title = title;
        this.url = url;
        this.poster = poster;
    }
}

const MOVIES = [
    new Movie("미션 임파서블", "mission impossible.html", "images/mission.jpg"),
    new Movie("하이파이브", "hi-five.html", "images/hi.jpg"),
    new Movie("릴로 & 스티치", "lilo.html", "images/rill.jpg"),
    new Movie("나를 모르는 그녀의 세계에서", "unknownher.html", "images/she.jpg"),
    new Movie("소주전쟁", "sojuwar.html", "images/soju.jpg"),
];
