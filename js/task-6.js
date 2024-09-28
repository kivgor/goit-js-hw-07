function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let markup = "";
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    markup += `<div style="width:${width}px; height:${height}px; margin-right:44px; margin-bottom:44px; display:inline-block; background-color:${getRandomHexColor()}"></div>`;
    // markup += `<div style="width:${width}px; height:${height}px; margin-right:44px; margin-bottom:44px; display:inline-block; background-color:${getRandomHexColor()}">${i + 1}</div>`;
    width += 10;
    height += 10;
  }
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = markup;
}
const buttonCreate = document.querySelector('button[data-create]');
const handleCreateClick = () => {
  const number = buttonCreate.previousElementSibling.value;
  buttonCreate.previousElementSibling.value = "";
  if (number >= 1 && number <= 100) {
    createBoxes(number);
  }
};
buttonCreate.addEventListener("click", handleCreateClick);

function destroyBoxes() {
  let markup = "";
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = markup;
}
const buttonDestroy = document.querySelector('button[data-destroy]');
buttonDestroy.addEventListener("click", destroyBoxes);