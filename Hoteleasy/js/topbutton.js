document.addEventListener('scroll', function() {
  var currentScrollValue = document.documentElement.scrollTop;
  //console.log('currentScrollValue is ' + currentScrollValue);
  if(currentScrollValue>=100){
    document.getElementById("btn_scroll_top").style.display = "flex";
    //console.log('currentScrollValue is는 ' + currentScrollValue);
  }else{
    document.getElementById("btn_scroll_top").style.display = "none";
  }
});