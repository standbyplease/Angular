document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('about-link');
    const homeLink = document.getElementById('home-link');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        fetch('/about')
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
            })
            .catch(error => console.error('Error fetching about page:', error));
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        fetch('/')
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
            })
            .catch(error => console.error('Error fetching home page:', error));
    });
});