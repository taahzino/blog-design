const signInBtn = document.querySelectorAll('.signInBtn');
const signUpBtn = document.querySelectorAll('.signUpBtn');
const container = document.querySelector('#container');

signUpBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add('right_panel_active');
    });
});

signInBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove('right_panel_active');
    });
});
