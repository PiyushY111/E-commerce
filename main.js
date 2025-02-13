let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}
let cart = document.querySelector('.cart');
document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}
let user = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    
}
window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}
//navbar scroll
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
});
//swiper
var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop:true, 
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints:{
        0:{
            slidesPerView:0,
        },
        568:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1020:{
            slidesPerView:3,
        },
    },
  });
