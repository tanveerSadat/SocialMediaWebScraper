
// Attach a click event listener to the HTML element with the ID 'toggleMenuButton'
document.getElementById('toggleMenuButton').addEventListener('click', function() {
    
    // Find the first element with the class 'menu' using the querySelector method
    document.querySelector('.menu').classList.toggle('open');
    document.body.classList.toggle('menu-closed');
    this.classList.toggle('pressed'); // Toggle the "pressed" class on the button
});

document.addEventListener('DOMContentLoaded', function() {
    
    // Get the container and paragraph element by ID
    const container = document.getElementById('fadeContainer');
    const paragraph = document.getElementById('fadeInParagraph');

    // Split the text into an array of words and clear the original text
    const words = paragraph.textContent.split(/[ ,]/); // Split by whitespace characters and commas
    paragraph.textContent = '';

    // Iterate over the words and create spans with individual words
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' '; // Add a space between words
        span.style.opacity = '0';
        span.style.transition = `opacity 0.6s ease ${index * 0.06}s`; // Apply transition with delay
        paragraph.appendChild(span);

        // Insert a line break after every 4 words
        if ((index + 1) % 4 === 0) {
            paragraph.appendChild(document.createElement('br'));
        }
    });

    // Trigger a reflow to ensure transitions work
    container.offsetWidth;

    // Incrementally increase the opacity of each word
    words.forEach((word, index) => {
        paragraph.children[index].style.opacity = '1';
    });
});
