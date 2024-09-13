document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();

        if (!username || !title || !content) {
            alert('Please fill out all fields');
            return;
        }

        const post = { username, title, content };
        const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        posts.push(post);
        localStorage.setItem('blogPosts', JSON.stringify(posts));

        window.location.href = 'blog.html';
    });
});
