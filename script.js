
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu after clicking a navigation link

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


// TYPING ANIMATION

const phrases = [
  "web experiences",
  "useful applications",
  "better solutions"
];

const typedText = document.getElementById("typedText");

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (!deleting) {
    typedText.textContent = currentPhrase.substring(
      0,
      characterIndex + 1
    );

    characterIndex++;

    if (characterIndex === currentPhrase.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typedText.textContent = currentPhrase.substring(
      0,
      characterIndex - 1
    );

    characterIndex--;

    if (characterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 85);
}

typeEffect();


// CURRENT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();

