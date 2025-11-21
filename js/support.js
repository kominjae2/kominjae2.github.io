// ------------------------------
// 댓글 1개를 정의하는 클래스
// ------------------------------
class Comment {
    constructor(name, message, createdAt = new Date()) {
        this.name = name;
        this.message = message;
        this.createdAt = createdAt;
    }
}

// ------------------------------
// 댓글을 저장/불러오는 저장소 클래스 (localStorage 활용)
// ------------------------------
class CommentStore {
    constructor(key = "supportComments") {
        this.key = key;
    }

    load() {
        const raw = window.localStorage.getItem(this.key);
        if (!raw) return [];
        const arr = JSON.parse(raw);
        return arr.map(c => new Comment(c.name, c.message, new Date(c.createdAt)));
    }

    save(comments) {
        window.localStorage.setItem(this.key, JSON.stringify(comments));
    }
}

// ------------------------------
// DOM 업데이트 전담 클래스
// ------------------------------
class SupportUI {
    constructor(listSelector) {
        this.listEl = document.querySelector(listSelector);
    }

    // 댓글 목록 렌더링
    render(comments) {
        this.listEl.innerHTML = "";

        if (comments.length === 0) {
            this.listEl.innerHTML = "<li>등록된 댓글이 없습니다.</li>";
            return;
        }

        comments.forEach(c => {
            const date = c.createdAt.toLocaleString();
            const li = document.createElement("li");
            li.innerHTML = `<strong>${c.name}</strong> (${date})<br>${c.message}`;
            this.listEl.appendChild(li);
        });
    }
}

// ------------------------------
// 전체 고객센터 기능을 제어하는 App 클래스
// ------------------------------
class SupportApp {
    constructor() {
        this.store = new CommentStore();
        this.ui = new SupportUI(".comment-list");

        this.nameInput = document.getElementById("name");
        this.commentInput = document.getElementById("comment");
        this.form = document.querySelector("form");

        this.comments = [];
    }

    init() {
        // 저장된 데이터 불러오기
        this.comments = this.store.load();
        this.ui.render(this.comments);

        // 폼 제출 이벤트 등록
        this.form.addEventListener("submit", e => {
            e.preventDefault(); // 페이지 새로고침 막음
            this.addComment();
        });
    }

    addComment() {
        const name = this.nameInput.value.trim() || "익명";
        const message = this.commentInput.value.trim();

        if (message === "") {
            window.alert("내용을 입력해주세요!");
            return;
        }

        const comment = new Comment(name, message);
        this.comments.push(comment);

        this.store.save(this.comments);
        this.ui.render(this.comments);

        // 입력창 비우기
        this.commentInput.value = "";
    }
}

// ----------------------------------
// 페이지 로드 완료 후 App 실행 (BOM)
// ----------------------------------
window.addEventListener("DOMContentLoaded", () => {
    const app = new SupportApp();
    app.init();
});
