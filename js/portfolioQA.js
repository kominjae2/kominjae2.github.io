// Q&A 데이터 모델
class QAItem {
    constructor(name, message, createdAt = new Date()) {
        this.name = name;
        this.message = message;
        this.createdAt = createdAt;
    }
}

// localStorage 저장 클래스
class QAStore {
    constructor(key = "portfolioQA") {
        this.key = key;
    }

    load() {
        const raw = window.localStorage.getItem(this.key);
        if (!raw) return [];
        const arr = JSON.parse(raw);
        return arr.map(item => new QAItem(item.name, item.message, new Date(item.createdAt)));
    }

    save(list) {
        window.localStorage.setItem(this.key, JSON.stringify(list));
    }
}

// DOM 업데이트 클래스
class QAUI {
    constructor(listId) {
        this.listEl = document.getElementById(listId);
    }

    render(list) {
        this.listEl.innerHTML = "";

        if (list.length === 0) {
            this.listEl.innerHTML = "<li>등록된 질문이 없습니다.</li>";
            return;
        }

        list.forEach(item => {
            const li = document.createElement("li");
            const date = item.createdAt.toLocaleString();
            li.innerHTML = `
                <strong>${item.name}</strong> (${date})<br>
                ${item.message}
            `;
            this.listEl.appendChild(li);
        });
    }
}

// 전체 기능 관리 클래스
class PortfolioQAApp {
    constructor() {
        this.store = new QAStore();
        this.ui = new QAUI("qaList");

        this.nameInput = document.getElementById("qaName");
        this.msgInput = document.getElementById("qaMessage");
        this.form = document.getElementById("qaForm");

        this.list = [];
    }

    init() {
        this.list = this.store.load();
        this.ui.render(this.list);

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addQA();
        });
    }

    addQA() {
        const name = this.nameInput.value.trim() || "익명";
        const message = this.msgInput.value.trim();

        if (message === "") {
            alert("내용을 입력해주세요!");
            return;
        }

        const item = new QAItem(name, message);
        this.list.push(item);

        this.store.save(this.list);
        this.ui.render(this.list);

        this.msgInput.value = "";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const app = new PortfolioQAApp();
    app.init();
});
