//variables
let readmoreVisiblity = false;


const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('show');
});

// about us readmore starts here
const readmorebutton = document.querySelector('.readmore-button');


const about = document.querySelector('.desc-holder');

const hiddenParagrah = document.querySelector('.text-description-hidden');

readmorebutton.addEventListener('click', function() {
    if(!readmoreVisiblity){
        
        readmorebutton.textContent = 'Read less';
        
        hiddenParagrah.style.display = 'block';
        
        //about.classList.toggle('showmore');

        about.style.overflow= 'scroll'; 
        
        readmoreVisiblity = !readmoreVisiblity;
    }
    else{
        
        readmorebutton.textContent = 'Read more';
        about.style.overflow = 'hidden';
        hiddenParagrah.style.display = 'none';
        readmoreVisiblity = !readmoreVisiblity;
    }
});


//stick man animation
//const holder = document.querySelector('.imageholder');//holder
//const stickman = document.querySelector('.stickman');// animated image


const icon = document.querySelector('i'); 
//const sendbutton = document.querySelector('.submit-box');


icon.addEventListener('click', function() {
    
    alert('gfnm');

    //holder.style.display = 'block';
    //stickman.classList.add('my-animation');
});