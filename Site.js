// Function to validate and submit a contact form
function handleSubmitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Example of an AJAX call (using fetch) to send data to the server
    const formData = {
        name: name,
        email: email,
        message: message
    };

    fetch('https://your-server-endpoint.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            // Optionally reset the form
            document.getElementById('contact-form').reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message. Please try again.');
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmitForm);
    }
});
