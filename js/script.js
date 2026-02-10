let btn = document.getElementById("btn");
const saveColor = localStorage.getItem("color");
if (saveColor) {
  document.body.style.backgroundColor = saveColor;
}
btn.addEventListener("click", function () {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
  localStorage.setItem("color", randomColor);
});
