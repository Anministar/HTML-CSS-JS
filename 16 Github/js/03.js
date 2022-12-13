new Swiper ('.second-banner .swiper', {
  direction : 'horizontal',    //수형 슬라이드(기본)
  autoplay : {                        //시작시 바로 재생 여부
    delay : 1000,
    disableOnInteraction : false    //사용자의 action에 따른 슬라이드 동작 정지여부
  },
  loop : true,                         //무한재생

  slidesPerView:7,              //한번에 보여주는 slide 개수
  spaceBetween : 5,           //slide 간격 (px)
  centeredSlides : true,
  
  
  // navigation
  navigation:{
    prevEl : '.second-banner .swiper>.swiper-button-prev' ,
    nextEl : '.second-banner .swiper>.swiper-button-next'
  },
  //pagination
  // pagination:{
  //   el : '.second-banner .swiper .swiper-pagination',
  //   type : 'bullets',      //bullets, progressbar, fraction (1/5 이런식으로 되어있는거)
  //   clickable : 'true'
  // },
  //마우스 휠 효과
  // mousewheel : true,
  // effect : 'fade',
  // speed:1000,
  
  // 스크롤 바
  // scrollbar:{
    // el : '.second-banner .swiper .swiper-scrollbar',
    // draggable : true
  // }
  
  });
  
  
  