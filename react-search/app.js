const movies = [
  { title: "미션 임파서블", img: "../images/mission.jpg" },
  { title: "하이파이브", img: "../images/hi.jpg" },
  { title: "릴로 & 스티치", img: "../images/rill.jpg" },
  { title: "나를 모르는 그녀의 세계에서", img: "../images/she.jpg" },
  { title: "소주전쟁", img: "../images/soju.jpg" }
];

function MovieSearch() {
  const [query, setQuery] = React.useState("");
  const [result, setResult] = React.useState(null);

  function search() {
    const r = movies.find((m) =>
      m.title.toLowerCase().includes(query.toLowerCase())
    );
    setResult(r || "none");
  }

  return React.createElement(
    "div",
    null,
    [
      React.createElement("input", {
        type: "text",
        placeholder: "검색어 입력",
        value: query,
        onChange: (e) => setQuery(e.target.value)
      }),
      React.createElement(
        "button",
        { onClick: search },
        "검색"
      ),
      result && result !== "none"
        ? React.createElement(
            "div",
            { className: "card" },
            [
              React.createElement("h2", null, result.title),
              React.createElement("img", { src: result.img, width: 150 })
            ]
          )
        : result === "none"
        ? React.createElement(
            "p",
            { style: { marginTop: "20px", color: "red" } },
            "검색 결과 없음"
          )
        : null
    ]
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(MovieSearch)
);
