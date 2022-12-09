// Todo < - > Done 전환 버튼 이벤트
const TodoBtnEl = document.querySelector('.btn--Todo');
const DoneBtnEl = document.querySelector('.btn--Done');
const TodoBlockEl = document.querySelector('.TodoContainer>.Todo__body>.body__Do');
const DoneBlockEl = document.querySelector('.TodoContainer>.Todo__body>.body__Done');

// @  ToDo와 Done의 화면 전환 시
DoneBtnEl.addEventListener('click', function () {
  //ANIMATION
  TodoBlockEl.style.animationName='ToDone';
  TodoBlockEl.style.animationDuration='1s';

  DoneBlockEl.classList.remove('hidden');
  DoneBlockEl.classList.add('active');

  TodoBlockEl.classList.remove('active');
  TodoBlockEl.classList.add('hidden');



})

TodoBtnEl.addEventListener('click', function () {
//ANIMATION
  DoneBlockEl.style.animationName='DoneTo';
  DoneBlockEl.style.animationDuration='1s';

  TodoBlockEl.classList.remove('hidden');
  TodoBlockEl.classList.add('active');

  DoneBlockEl.classList.remove('active');
  DoneBlockEl.classList.add('hidden');
  
})

// Item -> TodoListBlock add
const InputEl = document.querySelector('.TodoContainer>.Todo__header>input');
const TodoListsEl = document.querySelector('.TodoContainer>.Todo__body>.body__Do>ul');

const appendTodo = () => {

  //비어있을때는 추가x
  if (InputEl.value == '') {
    alert("할 일을 적어주세요..");
    reuturn;
  }
  const liEl = document.createElement('li');
  let code = '';
  code += '<div><button class="btnicon" onclick="ToDoneList(this)"><i class="bi bi-check-square"></i></button></div>';
  // ToDoneList(this) : 여기서 this는 버튼 객체의 주소값임 그걸 함수에서 El로 받아서 처리
  code += '<div><span>' + InputEl.value + '</span></div>';
  code += '<div> ';
  code += '<button class="btnicon" onclick="prev(this)"><i class="bi bi-caret-up-square"></i></button>';
  code += '<button class="btnicon" onclick="next(this)"><i class="bi bi-caret-down-square"></i></button>';
  code += '</div> ';
  code += '';

  liEl.innerHTML = code;
  TodoListsEl.append(liEl);
  InputEl.value = '';
};

// 엔터키에 대한 이벤트
InputEl.addEventListener('keydown', function () {
  // console.log(event.keyCode);
  if (event.keyCode == 13) {
    appendTodo();
  }
})


// Todo->Done Move
const ToDoneList = function (El) {
  // alert("CLICKED");
  // alert(El);                         //button
  // alert(El.parentNode);              //div
  // alert(El.parentNode.parentNode);   //li
  const liEl = El.parentNode.parentNode;

  // 1,3 icon 변경
  const childEl1 = liEl.children[0]; //li안의 1번째 div태그(아이콘)
  const childEl2 = liEl.children[1]; //li안의 2번째 div태그(내용)
  const childEl3 = liEl.children[2]; //li안의 3번째 div태그(아이콘)

  childEl1.children[0].remove(); //1번째 div태그 안의 첫번째 자식 제거
  childEl1.innerHTML = '<button class="btnicon" onclick="ToTodoList(this)"><i class="bi bi-dash-square"></i></button>';

  childEl3.children[0].remove(); //3번째 div태그 안의 첫번째 자식 제거
  childEl3.innerHTML = '<button class="btnicon" onclick="removeLi(this)"><i class="bi bi-trash"></i></button>';

  // TodoListUl -> DoneListUl로 li옮기기
  const DoneListUlEl = document.querySelector('.TodoContainer>.Todo__body>.body__Done>ul');
  DoneListUlEl.append(liEl);

  
}

// DoneList->TodoList li move
const ToTodoList = function (El) {
  // alert("clicked!!");
  const liEl = El.parentNode.parentNode; //li 태그
  // 1,3 icon 변경
  const childEl1 = liEl.children[0]; //li안의 1번째 div태그(아이콘)
  const childEl2 = liEl.children[1]; //li안의 2번째 div태그(내용)
  const childEl3 = liEl.children[2]; //li안의 3번째 div태그(아이콘)

  childEl1.children[0].remove(); //1번째 div태그 안의 첫번째 자식 제거
  childEl1.innerHTML = '<button class="btnicon" onclick="ToDoneList(this)"><i class="bi bi-check-square"></i></button>';

  childEl3.children[0].remove(); //3번째 div태그 안의 첫번째 자식 제거
  childEl3.innerHTML = '<button class="btnicon" onclick="prev(this)"><i class="bi bi-caret-up-square"></i></button>';
  childEl3.innerHTML += '<button class="btnicon" onclick="next(this)"><i class="bi bi-caret-down-square"></i></button>';

  // DoneListUl -> TodoListUl  로 li옮기기
  const TodoListUlEl = document.querySelector('.TodoContainer>.Todo__body>.body__Do>ul');
  TodoListUlEl.append(liEl);

}

// 휴지통 버리기
const removeLi = function (El) {
  // alert("remove!!!");
  // alert(El.parentNode.parentNod e);
  const liEl = El.parentNode.parentNode;
  let isremove = confirm('정말 삭제 하실껀가요?');
  if (isremove) {
    liEl.remove();
  }
};

// prev next 함수 생성
const prev = function (El) {
    // alert("prev");
    const liEl = El.parentNode.parentNode;
    const prevliEl = liEl.previousSibling; // Null리턴
    console.log(prevliEl.value);

    //실행해서 F12로 console.log를 통해서 undefined가 찍히는걸 보고 만듦.
    if (prevliEl.value === undefined) {
      alert("최상위 입니다");
      return;
    }
      else {
        liEl.after(prevliEl);
      }
    }

    const next = function (El) {
      // alert("next");
      const liEl = El.parentNode.parentNode;
      const nextliEl = liEl.nextSibling; // Null리턴
    console.log(nextliEl);

    // 작동하는 구조가 달라서 nextliEl.value === 이런식으로 안되는거임.
    //consolel.log를 그때그때 찍어보고 만들던지, 아니면 JavaScript 함수를 찾아보고 만들던지
    if (nextliEl === null) {
      alert("최하위 입니다");
      return;
    }
      else {
        liEl.before(nextliEl);
      }
    }
    