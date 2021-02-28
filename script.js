`use strict`;
const typed = document.querySelector(`.typed`);
const cursor = document.querySelector(`.cursor`);
const typedText = [
  `beautiful`,
  `a journey, part of life`,
  `fun`,
  `could be hard, or hard actually`,
];
const typingDelay = 200;
const erasingDelay = 120;
const newTextDelay = 2000;
let typedTextIndex = 0;
let charIndex = 0;

function typing() {
  if (!cursor.classList.contains(`typing`)) cursor.classList.add(`typing`);
  if (charIndex < typedText[typedTextIndex].length) {
    typed.textContent += typedText[typedTextIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typing, typingDelay);
  } else {
    cursor.classList.remove(`typing`);
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursor.classList.contains(`typing`)) cursor.classList.add(`typing`);
    typed.textContent = typedText[typedTextIndex].substr(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursor.classList.remove(`typing`);
    typedTextIndex++;
    if (typedTextIndex >= typedText.length) typedTextIndex = 0; // keeps iteration of array items.
    setTimeout(typing, newTextDelay);
  }
}
window.addEventListener(`load`, () => {
  setTimeout(typing, newTextDelay);
});
