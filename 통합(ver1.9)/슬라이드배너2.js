var slideIndex2 = 0; //slide index

// HTML 로드가 끝난 후 동작
window.onload=function(){
  showSlides2(slideIndex2);

  // Auto Move Slide
  var sec2 = 6000;
  setInterval(function(){
    slideIndex2++;
    showSlides2(slideIndex2);

  }, sec2);
}


// Next/previous controls
function moveSlides2(n) {
  slideIndex2 = slideIndex2 + n
  showSlides2(slideIndex2);
}

// Thumbnail image controls
function currentSlide2(n) {
  slideIndex2 = n;
  showSlides2(slideIndex2);
}

function showSlides2(n) {
  
  var slides2 = document.getElementsByClassName("mySlides2");
  var size2 = slides2.length;

  if ((n+1) > size2) {
    slideIndex2 = 0; n = 0;
  }else if (n < 0) {
    slideIndex2 = (size2-1);
    n = (size2-1);
  }

  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }

  slides2[n].style.display = "block";
}




// var slideIndex2 = 0; //slide index

// // HTML 로드가 끝난 후 동작
// window.onload=function(){
//   showSlides2(slideIndex2);

//   // Auto Move Slide
//   var sec2 = 6000;
//   setInterval(function(){
//     slideIndex2++;
//     showSlides2(slideIndex2);

//   }, sec2);
// }


// // Next/previous controls
// function moveSlides2(n) {
//   slideIndex2 = slideIndex2 + n
//   showSlides2(slideIndex2);
// }

// // Thumbnail image controls
// function currentSlide2(n) {
//   slideIndex2 = n;
//   showSlides2(slideIndex2);
// }

// function showSlides2(n) {
  
//   var slides2 = document.getElementsByClassName("mySlides2");
//   var dots2 = document.getElementsByClassName("dot2");
//   var size2 = slides2.length;

//   if ((n+1) > size2) {
//     slideIndex2 = 0; n = 0;
//   }else if (n < 0) {
//     slideIndex2 = (size2-1);
//     n = (size2-1);
//   }

//   for (i = 0; i < slides2.length; i++) {
//       slides2[i].style.display = "none";
//   }
//   for (i = 0; i < dots2.length; i++) {
//       dots2[i].className = dots2[i].className.replace(" active", "");
//   }

//   slides2[n].style.display = "block";
//   dots2[n].className += " active";
// }