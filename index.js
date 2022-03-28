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
    //active sections
    allSect.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //remove selected from other sections
            sectBtns.forEach(sec => sec.classList.remove('selected'));
            e.target.classList.add('selected');
        // hide other sections
            section.forEach(sec => { sec.classList.remove('selected')});
        
        const element = document.getElementById(id);
            element.classList.add('selected');
        }
    });

    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light');
    });
};
PageTrans();