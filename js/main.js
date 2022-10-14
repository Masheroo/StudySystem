let arrayOfStepsBar = document.querySelectorAll('.progress-bar-item');
let arrayOfContentOfStepsBar = document.querySelectorAll('.step-programm-item');

for (let i = 0; i < arrayOfStepsBar.length; i++) {
    
    const element = arrayOfStepsBar[i];

    element.addEventListener('click', ()=>{

        arrayOfStepsBar.forEach(elem =>{

            elem.classList.remove('active-progress-bar');

        });

        element.classList.add('active-progress-bar');

        arrayOfContentOfStepsBar.forEach(content => {

            content.classList.remove('active-programm-item');

        });

        arrayOfContentOfStepsBar[i].classList.add('active-programm-item');

    });
    
}