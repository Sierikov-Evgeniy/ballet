new Swiper('.image-slider',{
    //навигация (стрелки) после добавляем классы в ХТМЛ
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },

//навигация
//буллеты ,текущее положение ,прогрессбар. после добавляем классы в ХТМЛ
  pagination:{
        el: '.swiper-pagination',
        //буллеты
        clickable: true,
         // димамические буллеты 
        dynamicBullets: true, 


//просгресс бар сверху страницы
      // type: 'progressbar'
},


//Автовысота
autoHeight: true,

//смена прозрачности эфектов переключения

/*effect: 'fade',
//дополнение к эфекту фэйд
fadeEffect:{
    //параленьная смена прозрачности
    crossFade:true,

},*/

//эфект переворот
effect:'flip',
//дополнение
flipEffect:{
    //тень
    slideShadows:true,
//показ только активного слайда
    limitRotation:true
},




/*//эфект 3-д куба.в цсс нужно ограничить ширину всего слайдера .image-slider{width:500px;}
effect:'cube',
//дополнение
cubeEffect:{
    //настройка тени
    slideShadows:true,
    shadow:true,
    shadowOffset:20,
   shadowScale:0.94
},*/
      


//Адаприв слайдера
//ширина экрана
/*breakpoints:{
    320:{
        slidesPerView:1,
    },
    480:{
        slidesPerView:2,
    },
    992:{
        slidesPerView:3,
    },
}*/


})
