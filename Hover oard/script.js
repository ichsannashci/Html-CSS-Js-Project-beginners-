const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.isFixed = false;

  square.addEventListener("mouseover", () => {
    if (!square.isFixed) {
      setColor(square);
    }
  });

  square.addEventListener("mouseout", () => {
    if (!square.isFixed) {
      removeColor(square);
    }
  });

  square.addEventListener("click", () => {
    fixColor(square);
    square.isFixed = true;
  });

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function fixColor(element) {
  const fixColor = getRandomColor();
  element.style.background = fixColor;
  element.style.boxShadow = `0 0 2px ${fixColor}, 0 0 10px ${fixColor}`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
