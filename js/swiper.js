// andar's PICK
var pick_swiper = new Swiper(".pickSwiper", {
    grabCursor: true,
    navigation: {
        nextEl: ".pickSwiper .swiper-button-next",
        prevEl: ".pickSwiper .swiper-button-prev",
    },
    scrollbar: {
        el: ".pickSwiper .swiper-scrollbar",
        hide: false,
    },
});

// new item
var new_swiper = new Swiper(".newSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    loop: true,            
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".newSwiper .swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".newSwiper .swiper-button-next",
        prevEl: ".newSwiper .swiper-button-prev",
    },
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 10,
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 20,
        },
        1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        },
    },
});

// 가을 이벤트
var event_swiper = new Swiper(".eventSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: ".eventSwiper .swiper-button-next",
        prevEl: ".eventSwiper .swiper-button-prev",
    },
});

// 전지현 set
var swiper = new Swiper(".setSwiper", {
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".setSwiper .swiper-button-next",
        prevEl: ".setSwiper .swiper-button-prev",
    },
});