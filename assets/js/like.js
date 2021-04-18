const likeIcon = document.querySelectorAll('far.fa-heart');
const reactBtn = document.querySelectorAll('.reactBtn');

reactBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const reactIcon = btn.querySelector('i');
        reactIcon.classList.toggle('fas');
        const reactName = btn.querySelector('.reactName');
        reactName.textContent = reactName.textContent.trim() === 'Like' ? 'Liked' : 'Like';
    });
});