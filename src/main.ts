import "./style.css";

(() => {
  const html = document.querySelector<HTMLDivElement>("#app");

  if (!html) return;

  html.innerHTML = `
  <div>
    <h1>Himanushi 雑記</h1>
  </div>`;
})();
