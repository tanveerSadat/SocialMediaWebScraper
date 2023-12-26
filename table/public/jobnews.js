
// Attach a click event listener to the HTML element with the ID 'toggleMenuButton'
document.getElementById('toggleMenuButton').addEventListener('click', function() {
    
    // Find the first element with the class 'menuTwo' using the querySelector method
    var menu = document.querySelector('.menuTwo');
    menu.classList.toggle('open');

    // Apply styles when the menu button is pressed
    this.classList.toggle('pressed'); 
});