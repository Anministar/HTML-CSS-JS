const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){

  new ScrollMagic
    .Scene({                              //감시할 대상의 시점을 설정함
      triggerElement : spyEl, //감시할 요소 선택
      triggerHook : .85       //스크린에서의 스크롤 위치(85퍼센트 위치에서 트리거를 발생하겠다)
    })
    .setClassToggle(spyEl,'show') // 85퍼센트 위치에서 show라는 클래스가 부여함과 동시에
    .addTo(new ScrollMagic.Controller());//ScrollMagic.Controller에 감시 대상으로 추가됨. (고정으로 넣어준다 생각하면 됨.)
  });