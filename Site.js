// Function to handle external link clicks
function handleExternalLink(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const link = this.href; // Get the link URL

    // Prompt the user with a confirmation dialog
    const userConfirmed = confirm("You are about to leave this site. Do you want to proceed to " + link + "?");
    
    if (userConfirmed) {
        window.location.href = link; // Redirect if user confirms
    }
}

// Function for smooth scrolling to internal links
function smoothScroll() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to target
            }
        });
    });
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Handle external link detection
    const externalLinks = document.querySelectorAll('a[target="_blank"], a[href^="http"], a[href^="https"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', handleExternalLink);
    });

    // Initialize smooth scrolling for internal links
    smoothScroll();
});
