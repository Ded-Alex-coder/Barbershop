$(document).ready(function () {
  $('.slider').slick({
    dots: true, //добавление точек внизу слайда//
    adaptiveHeight: true, // адаптивная высота//
    slidesToShow: 3, // сколько карт показовать сразу//
    slidesToScroll: 1, //прокрутка на ... кол во слайдов//
    speed: 700, // скорость прокрутки//
    infinite: true, //эффект бесконечности//
    initialSlide: 0, //с кокого слайда начинать показ//
    autoplay: true, // autoplay//
    autoplaySpeed: 2000, //скрорость проигрования//
    pauseOnHover: true, //пауза при наведении//
    pauseOnFocus: true, //пауза при нажатии//
    pauseOnDotsHover: true, //пауза при наведении на точки//
    draggable: false, // свайп мышкой с компа//
    swipe: true, //свайп пальцами на мобильных версиях//
    touchThreshold: 10, //как быстро нужно свайпнуть//
    waitForAnimate: false, //скорость прокрутки при нажатии стрелок//
    centerMode: false, //центрирует слайд //
    variableWidth: true, //применять или нет стили ширины с css//
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});
