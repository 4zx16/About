// Function to scroll smoothly to an element
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to open external sites in the same tab
function openLink(url) {
    window.location.href = url; // Redirect to the new URL
}

// Add event listeners to links to handle scrolling or linking
document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scroll to internal links (if applicable)
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToElement(targetId);
        });
    });

    // For external links, you can use a similar approach if you need specific handling
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function () {
            openLink(this.href);
        });
    });
});
