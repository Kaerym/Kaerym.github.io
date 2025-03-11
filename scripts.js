// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.animated-image');
    const text = document.querySelector('#fade-text');

    const texts = [
        "In Time, be that it is used wisely.",
        "At the precipice of dawn, what will you choose?",
        "To The Farthest Star, and Beyond.",
        "Relentless we must be.",
        "Peer beyond the veil.",
        "There is always a light.",
        "A strand's neglect births mountainous upheaval.",
        "You are the independent variable.",
        "Wait. and Witness."
    ];

    let lastTextIndex = -1;

    image.addEventListener('click', () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * texts.length);
        } while (randomIndex === lastTextIndex);

        lastTextIndex = randomIndex;
        text.textContent = texts[randomIndex];
        text.classList.add('visible');
        setTimeout(() => {
            text.classList.remove('visible');
        }, 2000); // Text will stay visible for 2 seconds before fading out
    });
});
