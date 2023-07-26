icon = document.querySelector(".menu");
icon.onclick = function(){
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("activate");
}

var firstIndex=0;
function automaticSlide(){
setTimeout(automaticSlide, 5000);
  var pics;
  const img=document.querySelectorAll('.slid');
  for(pics=0; pics<img.length;pics++){
    img[pics].style.display="none";
  }
  firstIndex++;
  if(firstIndex > img.length){
    firstIndex =1;
  }
  img[firstIndex -1].style.display="block";
}
automaticSlide();