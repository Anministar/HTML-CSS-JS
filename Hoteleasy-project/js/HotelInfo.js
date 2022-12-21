const BasicimgEl = document.querySelector('.contents .tinybody>#basic--image');
const ChangeimgEl1 = document.querySelector('.contents .tinybody>.image--select>#change--image1');
const ChangeimgEl2 = document.querySelector('.contents .tinybody>.image--select>#change--image2');
const ChangeimgEl3 = document.querySelector('.contents .tinybody>.image--select>#change--image3');
const ChangeimgEl4 = document.querySelector('.contents .tinybody>.image--select>#change--image4');

const ViewerImgEl = document.querySelector('.contents .tinybody>.viewer>img');

//이미지 클릭시 VIEWER 전환
ChangeimgEl1.addEventListener('click', function () {
    console.log('클릭됨.');
    ViewerImgEl.setAttribute('src', './image/석화숲.png');
    // BasicimgEl.style.backgroundImage="url('./image/스타일/c1743965-47b4-4217-a935-6991b96c09ed.webp')";
})


ChangeimgEl2.addEventListener('click', function () {
    console.log('클릭됨.');
    ViewerImgEl.setAttribute('src', './image/석화숲1.PNG');
    // BasicimgEl.style.backgroundImage="url('./image/스타일/c1743965-47b4-4217-a935-6991b96c09ed.webp')";
})

ChangeimgEl3.addEventListener('click', function () {
    ViewerImgEl.setAttribute('src', './image/석화숲2.PNG');
    // BasicimgEl.style.backgroundImage="url('./image/스타일/c1743965-47b4-4217-a935-6991b96c09ed.webp')";
})

ChangeimgEl4.addEventListener('click', function () {
    ViewerImgEl.setAttribute('src', './image/석화숲3.PNG');
    // BasicimgEl.style.backgroundImage="url('./image/스타일/c1743965-47b4-4217-a935-6991b96c09ed.webp')";
})


//
const form = window.document.getElementById('from');
var checkinEl = document.getElementById('check--in'); 
var checkoutEl = document.getElementById('check--out');

// var checkinYear = parseInt(checkinEl.slice(0,4));
// var checkinMonth = parseInt(checkinEl.slice(5,7));
// var checkinDay = parseInt(checkinEl.slice(8,10));

// var checkindate = new date(checkinYear, checkinMonth, checkinDay);

// var checkoutYear = parseInt(checkoutEl.slice(0,4));
// var checkoutMonth = parseInt(checkoutEl.slice(5,7));
// var checkoutDay = parseInt(checkoutEl.slice(8,10));

// var checkoutdate = new date(checkoutYear, checkoutMonth, checkoutDay);

// const elapsedMsec = checkoutdate.getTime() - checkindate.getTime();
// const elapsedDay = elapsedMsec / 1000 / 60 / 60 / 24;

// document.getElementById('daycal').innerHTML = elapsedDay;

// const CheckinEl = document.querySelector('.Body>.tinybody>.Payment>#check--in'); 
// const CheckoutEl = document.querySelector('.Body>.tinybody>.Payment>#check--out'); 

// e : eventlistener
checkoutEl.addEventListener('change', function() {
    
})



checkoutEl.addEv = e => {
    // e.preventDefault();
    // if(checkinEl == null) {
    //     alert("체크인 날짜를 선택해주세요!");
    // }

    // if(checkoutEl){

    // }

    if(['check--in'].values === '') {
        alert('체크인 날짜를 선택해주세요!!');
    }
    if(['check--out'].values === '') {
        alert('체크아웃 날짜를 선택해주세요!!');
    }

}