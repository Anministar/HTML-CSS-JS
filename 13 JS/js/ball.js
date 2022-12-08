const ballEl = document.querySelector('.box>#ball'); // querySelector로 ()안에 있는 애들을 찾는것.

const start=()=>{ // const라는 예약어는 Java의 final과 유사, 한번 설정한 값을 바꾸지 않겠다
  ballEl.style.animationPlayState='running'; // ball.css의 animation-play-state를 JS에서 쓰려면 -다음 소문자가 대문자로 바뀜, paused되어있는걸 running으로 바꾼것.
} 
const stop=()=>{
  ballEl.style.animationPlayState='paused';
}