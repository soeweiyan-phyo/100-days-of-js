const color = document.querySelector(".color");
const btn = document.querySelector(".generate");

const generateColor = () => {
  const randomHexColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomHexColor;
  color.innerHTML = "#" + randomHexColor;
};

btn.addEventListener("click", generateColor);

generateColor();
