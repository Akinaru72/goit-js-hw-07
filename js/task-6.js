function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let boxesSizes = [];
  let size = 30;
  for (let i = 1; i <= amount; ++i) {
    const divBox = document.createElement("div");
    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    boxesSizes.push(divBox);
    size += 10;
  }
  boxes.innerHTML = "";
  boxes.append(...boxesSizes);
}

function destroyBoxes(){
  boxes.innerHTML = "";
}

createBtn.addEventListener("click",() => {
  const amount = Number.parseInt(input.value.trim())
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", destroyBoxes);


