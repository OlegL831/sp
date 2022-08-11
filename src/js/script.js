const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})
close.addEventListener('click', () => {
    menu.classList.remove('active');
})

const newsbtn = document.querySelector('.news_btn'),
        newsactive = document.querySelector('.newsactive'),
        newsclose = document.querySelector('.news__close');
newsbtn.addEventListener('click', () => {
    newsactive.classList.add('active');
})
newsclose.addEventListener('click', () => {
    newsactive.classList.remove('active');
})

$('.carousel_items').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-prev"><img src="img/slide/left.png"></button>',
        prevArrow: '<button type="button" class="slick-next"><img src="img/slide/right.png"></button>',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 769,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 3000,
                
                }
        },]
        
});

$('.rent_items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-prev"><img src="img/rent/left.png"></button>',
        prevArrow: '<button type="button" class="slick-next"><img src="img/rent/right.png"></button>',
        autoplay: true,
        autoplaySpeed: 3000,
        
});