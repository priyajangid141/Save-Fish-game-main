let fish=document.querySelector('.fish');
let moveby=10;



window.addEventListener('load',() =>{
fish.style.position='absolute';
    fish.style.left=0;
    fish.style.top=0;


});
window.addEventListener('keyup',(e) =>
{
    switch(e.key){
        case 'ArrowLeft':
      fish.style.left=parseInt( fish.style.left)-moveby + 'px';
      break;
      case 'ArrowRight':
    fish.style.left=parseInt( fish.style.left)+ moveby + 'px';
    break;
     case 'ArrowUp':
  fish.style.top=parseInt( fish.style.left)-moveby + 'px';
  break;
    case 'ArrowDown':
     fish.style.top=parseInt( fish.style.left)+moveby + 'px';
     break;
    }
});
