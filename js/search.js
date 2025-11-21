// 검색 전담 컨트롤러
class SearchController {
    constructor() {
        this.searchInput = document.getElementById("searchInput");
        this.searchButton = document.querySelector(".search-bar button");
        this.ui = new UIController();
    }

    init() {
        // 검색 버튼 클릭
        this.searchButton.addEventListener("click", () => this.search());

        // 엔터키 검색
        this.searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") this.search();
        });
    }

    async search() {
        const keyword = this.searchInput.value.trim();

        if (keyword === "") {
            alert("검색어를 입력해주세요.");
            return;
        }

        try {
            // ⚡ 백엔드에서 영화 검색
            const res = await fetch(`http://localhost:3000/api/movies?q=${encodeURIComponent(keyword)}`);
            const movies = await res.json();

            if (!movies || movies.length === 0) {
                alert("해당 영화가 없습니다.");
                return;
            }

            const movie = movies[0]; // 가장 먼저 매칭된 영화 사용

            // UI 업데이트
            this.ui.showMovieCard(movie);

        } catch (error) {
            console.error("검색 중 오류 발생:", error);
            alert("서버와 연결할 수 없습니다.");
        }
    }
}

// 페이지 로드시 검색 기능 활성화
window.addEventListener("DOMContentLoaded", () => {
    const search = new SearchController();
    search.init();
});
