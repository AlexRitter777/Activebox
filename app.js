$(function() {
    /*Fixed Header*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight(); //высота блока intro
    let scrollPos = $(window).scrollTop(); //расстояния от верха окна при прокрутке
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    chekScroll(scrollPos, introH); //функция см. ниже - проверка скролла при загрузке страницы

    $(window).on("scroll  resize", function() { //мониторим для окна window scroll-прокрутку, resize - при изм. размера окна
        /*на каждое события выполняются команды ниже*/
        let introH = intro.innerHeight();//обновляем переменную в зависимости от разм. окна
        scrollPos = $(this).scrollTop(); //обновляем переменную в зависимости от scroll
        chekScroll(scrollPos, introH); //проводим функцию - проверка скролла при опр. положении скролла или изменении размера окна
        
    });

    function chekScroll(scrollPos, introH) {
        if( scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*Smoth scroll*/
    $("[data-scroll]").on("click", function(event) { //следим за атрибутом data-scroll при нажатии
        event.preventDefault();//отменяет стандартное поведение ссылки

        let elementID = $(this).data('scroll'); //для элемента c атрибутом data-scroll на который клинули получаем id блока, на который кликнули 
        let elementOffset = $(elementID).offset().top;// определяем расстояние от верха страницы до блока с ID элемента
        nav.removeClass("show");//убираем бургер меню
        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700); //скорость анимации, мс
    });

    /*Nav Toggle*/
     navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
        
    });

    /*Reviews: https://kenwheeler.github.io/slick/*/
    let slider =$("#reviewsSlider");

    slider.slick({
        infinite: true, //бесконечное кол-во показов
        slidesToShow: 1, //сколько показывать слайдов
        slidesToScroll: 1, //сколько будем скролить слайдов при клике на скролл
        fade: true, //прокртка или просто смена
        arrows: false, //убираем кнопки Previos, next
        dots: true
    });

});