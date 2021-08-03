const sliderContainer = document.querySelector('.slider-container');
const mainSlider = sliderContainer.querySelector('.slider');
const slider = sliderContainer.querySelectorAll('.slider .container');
const nextBtn = sliderContainer.querySelector('.next');
const prevBtn = sliderContainer.querySelector('.prev');
const controls = sliderContainer.querySelector('.controls ul');
const controlBtns = controls.querySelectorAll('li');

let counter = 0;
const size =  slider[0].clientWidth;


function btnSlide(){
    mainSlider.style.transform = 'translateX('+(-size*counter)+'px)';
    document.querySelector('.controls .control-active').classList.remove('control-active');
    controls.children[counter].classList.add('control-active');
}

nextBtn.addEventListener('click',()=>{
    if(counter>=slider.length-1){
        return;
    }
    counter++;
    btnSlide();
});

prevBtn.addEventListener('click',()=>{
    if(counter<1){
        return;
    }
    counter--;
    btnSlide();
});

controlBtns.forEach((indicator,index)=>{
    indicator.addEventListener('click',()=>{
        counter = index;
        btnSlide();
    });
   
});
