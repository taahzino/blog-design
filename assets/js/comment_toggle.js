const myCommentSection = document.querySelector('.my_comment');
const commentToggleBtn = document.querySelector('.toggleComment');

commentToggleBtn.addEventListener('click', () => {
    myCommentSection.classList.toggle('show');
});