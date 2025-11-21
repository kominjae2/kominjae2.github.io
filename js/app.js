class App {
    constructor() {
        this.repo = new MovieRepository(MOVIES);
        this.ui = new UIController();

        this.searchInput = document.getElementById("searchInput");
        this.searchBtn = document.querySelector(".search-bar button");
    }

    init() {
        // 검색 버튼 클릭 (DOM 이벤트)
        this.searchBtn.addEventListener("click", () => this.doSearch());

        // 엔터 키 검색
        this.searchInput.addEventListener("keydown", e => {
            if (e.key === "Enter") this.doSearch();
        });

        // BOM: URL 파라미터로 검색 지원 (예: index_movie.html?q=미션)
        const params = new URLSearchParams(window.location.search);
        const q = params.get("q");
        if (q) {
            this.searchInput.value = q;
            this.doSearch();
        }
    }

    doSearch() {
        const keyword = this.searchInput.value.trim();
        const results = this.repo.search(keyword);

        if (results.length > 0) {
            this.ui.showCard(results[0]);
        } else {
            this.ui.hideCard();
            window.alert("해당 영화가 없습니다."); // BOM 활용
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const app = new App();
    app.init();
});
