function loadContent(url) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<p>Loading...</p>`; // Optional: Loading message

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data; // Insert fetched content
        })
        .catch(error => {
            contentDiv.innerHTML = `<p>Error loading content: ${error.message}</p>`;
        });
}
