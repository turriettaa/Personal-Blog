document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
    const modeToggle = document.getElementById('mode-toggle');

    function displayPosts() {
        const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        postsContainer.innerHTML = '';

        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><em>By: ${post.username}</em></p>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    function toggleMode() {
        document.body.classList.toggle('dark-mode');
        modeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    }

    modeToggle.addEventListener('click', toggleMode);

    displayPosts();
});
