const burgerItem = document.querySelector(".burger");
const menuBox = document.querySelector(".menu__box");
const menuClose = document.querySelector('.menu__close');
burgerItem.addEventListener('click',() => {
    menuBox.style.display = 'block';
})
menuClose.addEventListener('click',() => {
    menuBox.style.display = 'none';
})



$('.hero__img').slick({
    arrows: true,
});
