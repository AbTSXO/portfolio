const card = document.querySelector('.card-work');
const container = document.querySelector('.work-container');

const cardleft = document.querySelector('#icard-work');
const containerleft = document.querySelector('#iwork-container');

const cardleft2 = document.querySelector('#icard-work2');
const containerleft2 = document.querySelector('#iwork-container2');



container.addEventListener('mousemove',(e)=>{
    
    let xAxis = (window.innerWidth /2 - e.pageX)/18;
    let yAxis = (window.innerHeight /2 - e.pageY)/18;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseleave',(e)=>{
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});



containerleft.addEventListener('mousemove',(e)=>{
    
  
    let mAxis = (window.innerWidth /2 - e.pageX)/16;
    let sAxis = (window.innerHeight /2 - e.pageY)/16;
    cardleft.style.transform = `rotateY(${mAxis}deg) rotateX(${sAxis}deg)`;
});

containerleft.addEventListener('mouseleave',(e)=>{
    cardleft.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

containerleft2.addEventListener('mousemove',(e)=>{
    
  
    let mAxis = (window.innerWidth /2 - e.pageX)/18;
    let sAxis = (window.innerHeight /2 - e.pageY)/18;
    cardleft2.style.transform = `rotateY(${mAxis}deg) rotateX(${sAxis}deg)`;
});

containerleft2.addEventListener('mouseleave',(e)=>{
    cardleft2.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
