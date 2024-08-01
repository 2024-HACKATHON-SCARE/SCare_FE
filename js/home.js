document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("table.month tbody tr");

  // 첫 번째 행을 처리
  const firstRowCells = rows[0].querySelectorAll("td");
  firstRowCells.forEach((cell) => {
    const link = cell.querySelector("a");
    if (link) {
      const dayText = parseInt(link.textContent, 10);
      const isDayoff = link.classList.contains("dayoff");
      const isSaturday = link.classList.contains("saturday");

      if (dayText >= 20) {
        if (isDayoff) {
          link.classList.add("dayoff-highlight");
        } else if (isSaturday) {
          link.classList.add("saturday-highlight");
        } else {
          link.classList.add("default-color");
        }
      }
    }
  });

  // 마지막 행을 처리
  const lastRowCells = rows[rows.length - 1].querySelectorAll("td");
  lastRowCells.forEach((cell) => {
    const link = cell.querySelector("a");
    if (link) {
      const dayText = parseInt(link.textContent, 10);
      const isDayoff = link.classList.contains("dayoff");
      const isSaturday = link.classList.contains("saturday");

      if (dayText < 20) {
        if (isDayoff) {
          link.classList.add("dayoff-highlight");
        } else if (isSaturday) {
          link.classList.add("saturday-highlight");
        } else {
          link.classList.add("default-color");
        }
      }
    }
  });
});
