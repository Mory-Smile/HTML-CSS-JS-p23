let num = 0;

let value = document.querySelector(".value");
let btns = document.querySelectorAll(".btn");

let danger = document.querySelector("btn-danger");
let success = document.querySelector("btn-success");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let styles = e.currentTarget.classList;
    if (styles.contains("btn-danger")) {
      num--;
    } else if (styles.contains("btn-success")) {
      num++;
    } else {
      num = 0;
    }
    value.textContent = num;
    //                Colors Change
    if (num > 0) {
      value.style.color = "green";
    } else if (num < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  });
});
