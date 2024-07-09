// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.animated-image');
    const text = document.querySelector('#fade-text');

    const texts = [
        "In time.",
        "At the precipice of dawn will you hear it?",
        "To see beyond the stars, it is ethereal.",
        "Relentless we must be.",
        "Peer beyond the veil.",
        "There is always a light."
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
