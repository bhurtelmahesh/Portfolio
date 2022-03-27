const section = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSect = document.querySelector('.main-content');

const PageTrans = () => {
    //clicking active class
    sectBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            sectBtn.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
};
PageTrans();

