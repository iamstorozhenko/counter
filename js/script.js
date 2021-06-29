const btns = document.querySelectorAll(".btn");
const value = document.querySelector(".value");

let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", e => {
    // Get current target and get classlist by clicking
    const style = e.currentTarget.classList;
    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("reset")) {
      count = 0;
    } else if (style.contains("increase")) {
      count++;
    }
    if (count < 0) {
      value.style.color = "#D83A56";
    }
    if (count === 0) {
      value.style.color = "#c4c4c4";
    }
    if (count > 0) {
      value.style.color = "#66de93";
    }
    // Equate value with count And change the value
    value.textContent = count;
  });
});
