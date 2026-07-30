// Fade animation
window.addEventListener("load", () => {
  document.querySelector(".container").style.opacity = "1";
});

// Mouse Glow Effect
document.addEventListener("mousemove", (e) => {
  const bg = document.querySelector(".bg");

  let x = (e.clientX / window.innerWidth) * 100;
  let y = (e.clientY / window.innerHeight) * 100;

  bg.style.background = `
  radial-gradient(circle at ${x}% ${y}%,
  rgba(255,215,0,.20) 0%,
  transparent 30%),

  radial-gradient(circle at top,
  rgba(255,215,0,.15) 0%,
  transparent 35%),

  linear-gradient(180deg,#000,#111,#000)
  `;
});

// Floating Profile
const profile = document.querySelector(".profile");

let direction = 1;

setInterval(() => {
  profile.style.transform =
    direction === 1
      ? "translateY(-8px)"
      : "translateY(8px)";

  direction *= -1;
}, 1800);

// Button Ripple
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  btn.style.transform = "scale(.95)";

  setTimeout(() => {
    btn.style.transform = "scale(1)";
  }, 180);
});