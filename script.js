const root = document.documentElement;
const body = document.body;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const tiltCards = Array.from(document.querySelectorAll(".tilt-card"));

function updatePointerEffect(event) {
  if (reduceMotion.matches) return;

  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;

  root.style.setProperty("--pointer-x", x.toFixed(4));
  root.style.setProperty("--pointer-y", y.toFixed(4));
}

function resetPointerEffect() {
  root.style.setProperty("--pointer-x", "0");
  root.style.setProperty("--pointer-y", "0");
}

function handleTiltMove(event) {
  if (reduceMotion.matches) return;

  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const rotateY = ((offsetX / rect.width) - 0.5) * 10;
  const rotateX = (0.5 - (offsetY / rect.height)) * 10;

  card.style.transform = `translateY(-6px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
}

function resetTilt(event) {
  const card = event.currentTarget;
  card.style.transform = "";
}

window.addEventListener("mousemove", updatePointerEffect, { passive: true });
window.addEventListener("mouseleave", resetPointerEffect);
window.addEventListener("blur", resetPointerEffect);

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", handleTiltMove, { passive: true });
  card.addEventListener("mouseleave", resetTilt);
  card.addEventListener("blur", resetTilt);
});

if (reduceMotion.matches) {
  body.classList.add("intro-done");
  body.classList.add("hero-ready");
} else {
  window.setTimeout(() => {
    body.classList.add("intro-done");
    window.setTimeout(() => {
      body.classList.add("hero-ready");
    }, 120);
  }, 3200);
}

resetPointerEffect();
