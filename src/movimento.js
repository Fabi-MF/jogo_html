const rostinho = document.querySelector('.rostinho');
const ma_fa = document.querySelector('.ma_fa');
const gram0 = document.querySelector('.gram0')

const jump = ()=> {

     rostinho.classList.add('jump');

     setTimeout(()=>{
        rostinho.classList.remove('jump')
     },700);
}

const loop = setInterval(() =>{
    console.log('loop')
   
    const ma_faPosition = ma_fa.offsetLeft;
    const rostinhoPosition= +window.getComputedStyle(rostinho).bottom.replace('px','');

    if(ma_faPosition <= 100 && ma_faPosition >0 && rostinhoPosition <120 ){

        ma_fa.style.animation = 'none';
        ma_fa.style.left = `${ma_faPosition}px`;

        rostinho.style.animation = 'none';
        rostinho.style.bottom = `${rostinhoPosition}px`;

        rostinho.src = 'img/sad_fabimf.png' ;

        gram0.style.animation='none';
        gram0.style.left = `${ gram0Position}`

        clearInterval(loop);
    }
} ,10);

document.addEventListener('keydown', jump)