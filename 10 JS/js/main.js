<script>
    {/* //script를 head태그로 빼면 안됨. 기본적으로 절차지향은 위에서 밑으로 해석 */}
    {/* // So, script가 위로 가면 box가 없어서 에러가 뜸. */}
    boxEl = document.querySelector('.box');
    {/* // background-color ==> backgroundColor, 대문자로 바꿔주면 됨. */}
    boxEl.style.backgroundColor='orange';
  </script>