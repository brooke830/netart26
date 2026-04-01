// VARIABLE: colors array
let colors = ["red", "blue", "green", "yellow", "purple", "orange"];

// FUNCTION: create circle at x, y
function createCircle(x, y) {
  let circle = document.createElement("div");
  circle.className = "circle";

  let size = Math.random() * 100 + 50; // random size 50-150px
  circle.style.width = size + "px";
  circle.style.height = size + "px";

  circle.style.left = x + "px";
  circle.style.top = y + "px";

  let color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.backgroundColor = color;

  document.body.appendChild(circle);

  // remove after animation
  setTimeout(() => {
    circle.remove();
  }, 1000);
}

// EVENT LISTENER: CLICK
document.addEventListener("click", function(event) {
  createCircle(event.clientX, event.clientY);
});

// EVENT LISTENER: KEYDOWN
document.body.focus(); // make sure body is focused for keyboard
document.addEventListener("keydown", function() {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  createCircle(x, y);
});