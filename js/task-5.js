function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector(".color");

const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", () =>{
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
  spanColor.style.color = randomColor;
});

