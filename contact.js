const holder = document.querySelector('.imageholder');//holder
const stickman = document.querySelector('.stickman');// animated image

const icondivClick = document.querySelector(".myIcon");
icondivClick.addEventListener('click', (e)=>{
    animationStartFunction();
    
    //alert('jknk');
    //if(holder.style.display = 'none'){
    //holder.style.display = 'block';
    //stickman.classList.add('my-animation');
    //setTimeout(animationFunction, 0);
    //holder.style.display = 'none';
    //stickman.classList.remove('my-animation');
    }); 

 function animationStartFunction() {

         animationhappenFunction();
         stickman.addEventListener("animationend", () => {
            //stickman.remove();
            holder.style.display = 'none';
            stickman.classList.remove("my-animation");
    
          });
 }

function animationhappenFunction() {

    holder.style.display = 'block';
    stickman.classList.add('my-animation');
}

 

function animationstopFunction() {
    //alert('now am in');
    holder.style.display = 'none';
    stickman.classList.remove("my-animation");
    //holder.style.display = 'none';
    //stickman.classList.remove('my-animation');
  }
  