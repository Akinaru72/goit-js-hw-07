function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const createEl = document.querySelector("[data-create]");
const boxesEl = document.querySelector("#boxes");
const destroyEl = document.querySelector("[data-destroy]");

inputEl.addEventListener("input", () => {
  if (!(inputEl.value >= 0 && inputEl.value < 101)) {
    inputEl.value = null;
    return alert("Input correct number!");
  }
});

createEl.addEventListener("click", () => {
  destroyBoxes();
  createBoxes(inputEl.value);
  inputEl.value = null;
});

destroyEl.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement("div");
    boxEl.classList.add(`box${i + 1}`);
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${size + i * 10}px`;
    boxEl.style.height = `${size + i * 10}px`;
    boxesEl.append(boxEl);
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
