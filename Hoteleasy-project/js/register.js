const btn3El = document.querySelector('.btn3');
const btn2El = document.querySelector('.btn2');
const btn1El = document.querySelector('.btn1');
const signUpEl = document.querySelector('.signUp');


signUpEl.addEventListener('click',function(){
  alert("환영합니다! HotelEasy에 가입해주셔서 감사합니다!");
})
btn1El.addEventListener('click',function(){
  alert("사용 가능한 닉네임입니다!");
})

btn2El.addEventListener('click',function(){
  alert("사용 가능한 아이디입니다!");
})
btn3El.addEventListener('click',function(){
  alert("인증번호를 발송하였습니다!");
})