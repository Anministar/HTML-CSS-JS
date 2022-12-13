const badgeEl = document.querySelector('section>.sticky-banner');

//  document보다 상위 태그 ==> window라는 태그
// window는 창 전체, document는 실질적으로 보이는 창 부분(화면이 보이는 부분, 북마크나 밑에 작업표시줄 이딴거 말고)

// window.addEventListener('scroll', function(){
//   console.log('scroll !!');
//   // console.log(window.scrollY);
// })

//scroll의 민감도가 너무 커서 진짜 개조금만 움직여도 이벤트처리가 많이 됨.
//그러면 페이지의 속도저하를 일으키기 때문에 민감도를 줄이는 작업이 필요함.

// _ . throttle(함수, 처리시간) ==> 처리시간을 지연시켜 함수를 처리하겠다
// window.addEventListener('scroll', _.throttle(function(){
//   // console.log('scroll !!');
//   console.log(window.scrollY);
//   if(window.scrollY > 700) {
//     // 배지 숨기기
//     // badgeEl.style.display='none';
    
//     badgeEl.style.animationName='bgdown';
//     badgeEl.style.animationDuration='1s';
//   }
//   else {
//     //배지 표시하기
//     // badgeEl.style.display='block';
//     badgeEl.style.animationName='bgup';
//     badgeEl.style.animationDuration='1s';
//   }
// }, 300)); 



//@@@@@@@@@@@@@@@@@@@@@ 강사님이 Explain 없이 진도 쭉 나가셔서  못 적음 git 참조 @@@@@@@@@@@@@@@@@@@@@@@@@@


window.addEventListener('scroll', _.throttle(function(){
  // console.log('scroll !!');
  console.log(window.scrollY);
  if(window.scrollY > 700) {
    // 배지 숨기기
    // badgeEl.style.display='none';
    badgeEl.classList.add('badge--hidden');
    badgeEl.classList.remove('badge--show');
  }
  else {
    //배지 표시하기
    // badgeEl.style.display='block';
    badgeEl.classList.add('badge--show');
    badgeEl.classList.remove('badge--hidden');
  }
}, 300)); 



// 스크롤이 내려갈 떄 gnb-second가 fade-in, fade-out되는것도 만들 수 있음.
// 혼자 한번 만들어보기
  