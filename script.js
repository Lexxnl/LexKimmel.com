const phrases = ["Aspiring Web Developer", "Python Developer", "FPV Drone Pilot", "Computer Enthusiast", "Software Developer", "Tech Enthusiast", "Game Developer", "Polite Communicator"];
const dynamicText = document.querySelector(".dynamic-text");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    dynamicText.textContent = currentPhrase.slice(0, charIndex);

    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeAnimation, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeAnimation);
