
// Attach a click event listener to the HTML element with the ID 'toggleMenuButton'
document.getElementById('toggleMenuButton').addEventListener('click', function() {
    
    // Find the first element with the class 'menu' using the querySelector method
    // This line of code is responsible for expanding and collapsing the menu
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');

    // This can be used to apply styles when the menu button is pressed
    this.classList.toggle('pressed'); 

    // Find the elements with the classes 'titleText' and 'content'
    var titleText = document.querySelector('.titleText');
    var content = document.querySelector('.content');

    // Check if the menu has the 'open' class
    if (menu.classList.contains('open')) {
        // If it does, add the 'open' class to titleText and content
        titleText.classList.add('open');
        content.classList.add('open');
    } else {
        // If it doesn't, remove the 'open' class from titleText and content
        titleText.classList.remove('open');
        content.classList.remove('open');
    }
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