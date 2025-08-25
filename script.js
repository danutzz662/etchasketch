let container = document.querySelector(".container");
const generate = document.querySelector(".generateGrid");
const clearBtn = document.querySelector('.clear-btn');
let containerSize;
generate.addEventListener("click", () => {
  containerSize = Number(
    prompt("What size do you want the Etch-a-Sketch to be? 1-100", "")
  );
  if (isNaN(containerSize) || containerSize < 1 || containerSize > 100) {
    alert("OOPS!Please ente a number between 1 and 100");
  }
  generateGrid(containerSize);
});
let box;
//! Generate grid with the number of boxes enterd by the user
function generateGrid(number) {
  container.innerHTML = "";
  let boxHeight = 960 / number;
  for (let i = 0; i < number * number; i++) {
    box = document.createElement("div");
    box.className = "box";
    box.style.width = boxHeight + "px";
    box.style.height = boxHeight + "px";
    box.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = getRandomColor();
    });
    container.appendChild(box);
  }
}

// Clear the grid
function clearGrid() {
  // gets all the elements that have a 'box' class AND have a background-color property
  const boxes = Array.from(document.querySelectorAll('.box')).filter(box => {
    return box.style.backgroundColor !== '';
  });
  boxes.forEach(box => {
    box.style.removeProperty('background-color');
  });
}
clearBtn.addEventListener('click', clearGrid);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
window.addEventListener("load", () => {
  generateGrid(16);
});
