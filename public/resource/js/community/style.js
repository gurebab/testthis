$(document).ready(function(){

    new Swiper('.section01_slide', {
        autoplay : { delay : 2000, disableOnInteraction : false, },
        onSlideChangeEnd : true,
        loop : true,
        resistance : false,
        allowTouchMove : false,
        direction: 'vertical',
        slidesPerView : 1,
    });

    new Swiper('.section04_slide', {
        // autoplay : { delay : 2000, disableOnInteraction : false, },
        onSlideChangeEnd : true,
        loop : true,
        resistance : false,
        allowTouchMove : false,
        direction: 'vertical',
        slidesPerView : 1,
        spaceBetween : 12,
    });

    new Swiper('.section05_slide', {
        autoplay : { delay : 0, disableOnInteraction : false, },
        speed : 10000,
        onSlideChangeEnd : true,
        loop : true,
        resistance : false,
        allowTouchMove : false,
        direction: 'horizontal',
        slidesPerView : 'auto',
        spaceBetween : 18,
    });

    new Swiper('.section07_slide', {
        autoplay : { delay : 0, disableOnInteraction : false, },
        speed : 10000,
        onSlideChangeEnd : true,
        loop : true,
        resistance : false,
        allowTouchMove : false,
        direction: 'horizontal',
        slidesPerView : 'auto',
        spaceBetween : 14,
    });

});
