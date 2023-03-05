let menu = document.querySelector('#botao_menu');
let navbar = document.querySelector('.navbar');

// Mudar o menu para as 3 barras com o media query
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Abrir e Fechar o form de login
document.querySelector('#botao_login').onclick = () =>{
    document.querySelector('.login_form').classList.toggle('active');
}
document.querySelector('#fechar_login_form').onclick = () =>{
    document.querySelector('.login_form').classList.remove('active');
}

// Cria uma linha em degrade para separar o navbar do body
window.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// A função vai ser executada quando a página for carregada por completo
window.onload = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

}


// Mover a imagem de fundo de acordo com o movimento do mouse
// document.querySelector('.inicio').onmousemove = (e) =>{
//     document.querySelectorAll('.inicio_parallax').forEach(elm =>{

//         let speed = elm.getAttribute('data-speed');

//         let x = (window.innerWidth - e.pageX * speed) / 90;
//         let y = (window.innerHeight - e.pageY * speed) / 90;

//         elm.style.transform = `translateX(${y}px) translateY(${x}px)`

//     });
// };

// document.querySelector('.inicio').onmouseleave = () =>{
//     document.querySelectorAll('.inicio_parallax').forEach(elm =>{

//         elm.style.transform = `translateX(0px) translateY(0px)`

//     });
// };


// Cria um swiper na parte de veiculos populares
var swiper = new Swiper(".deslizar-veiculos", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  mousewheel: {
    forceToAxis: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});