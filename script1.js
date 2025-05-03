// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const alertButton = document.getElementById('alertButton');
    
    // Add click event listener to the button
    alertButton.addEventListener('click', function() {
        // Show an alert when the button is clicked
        alert('Hello! Thanks for visiting my webpage. ');
        
        // Bonus: Change the button text after click
        alertButton.textContent = 'You are Clicked!';
        
        // Reset the button text after 2 seconds
        setTimeout(function() {
            alertButton.textContent = 'Click Me Again!';
        }, 2000);
    });
});