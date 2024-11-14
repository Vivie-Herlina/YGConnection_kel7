// Toggle Like Button (Change icon when clicked)
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('.footer-icon');
        const liked = icon.src.includes("like.png");
        if (liked) {
            icon.src = "img/like_fill.png";  // change to filled heart
        } else {
            icon.src = "img/like.png";  // change back to empty heart
        }
    });
});

// Show comment section on comment button click
document.querySelectorAll('.comment-btn').forEach(button => {
    button.addEventListener('click', () => {
        const commentSection = button.closest('.post').querySelector('.comment-section');
        commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
    });
});

// Optional: Share functionality (example using alert)
document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', () => {
        const url = window.location.href;  // or generate specific share URL
        alert('Share this link: ' + url);
    });
});
