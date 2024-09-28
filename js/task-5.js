function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
changeColorButton.addEventListener("click", handleClick);

function handleClick(event) {
  const body = document.querySelector("body");
  const newBGColor = getRandomHexColor();
  body.style.backgroundColor = newBGColor;
  const colorInfo = document.querySelector("span.color");
  colorInfo.innerHTML = newBGColor;
}