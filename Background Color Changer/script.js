const body = document.querySelector("#body");
const btn = document.querySelector("#change-color-button");

function changeBackgroundColor() {
let newColor = Math.floor(Math.random() * 16777251).toString(16);

  let finalColor = `#${newColor.padStart(6, 0)}`;
 body.style.backgroundColor =finalColor;
 console.log(finalColor);
}

btn.addEventListener("click", changeBackgroundColor);