// Секція 11 — Додавання контенту (DOM)
let count = 1;

document.getElementById("addBtn").onclick = function() {
  const p = document.createElement("p");
  p.textContent = "Новий елемент #" + count++;
  document.getElementById("output").appendChild(p);
};

document.getElementById("clearBtn").onclick = function() {
  document.getElementById("output").innerHTML = "";
  count = 1;
};

// Секція 12 — Перемикання теми
document.getElementById("themeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  this.textContent = isDark ? "☀️ Перемкнути тему" : "🌙 Перемкнути тему";
});

// Секція 12 — Показати/сховати пояснення
document.getElementById("toggleBtn").addEventListener("click", function() {
  const box = document.getElementById("explanation");
  box.classList.toggle("hidden");
  const isHidden = box.classList.contains("hidden");
  this.textContent = isHidden ? "Показати пояснення" : "Сховати пояснення";
});