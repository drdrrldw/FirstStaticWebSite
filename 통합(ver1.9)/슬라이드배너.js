var slideIndex = 0; //slide index
var slideCoffeeIndex = 0; //slide index
      var arrImg1 = new Array("./이미지모음/커피 종류 사진/section2/스타벅스메뉴/돌체밀크티.jpg", "./이미지모음/커피 종류 사진/section2/스타벅스메뉴/딸기딜라이트요거트블렌디드.jpg",
      "./이미지모음/커피 종류 사진/section2/스타벅스메뉴/바닐라크립프라푸치노.jpg","./이미지모음/커피 종류 사진/section2/스타벅스메뉴/아이스돌체블랙밀크티.jpg",
      "./이미지모음/커피 종류 사진/section2/스타벅스메뉴/아이스카라멜마키야또.jpg","./이미지모음/커피 종류 사진/section2/스타벅스메뉴/아이스카페라떼.jpg",
      "./이미지모음/커피 종류 사진/section2/스타벅스메뉴/아이스카페아메리카노.jpg","./이미지모음/커피 종류 사진/section2/스타벅스메뉴/아이스카푸치노.jpg",
      "./이미지모음/커피 종류 사진/section2/스타벅스메뉴/아이스캐모마일브랜드티.jpg","./이미지모음/커피 종류 사진/section2/스타벅스메뉴/아이스히비스커스브렌드티.jpg",
      "./이미지모음/커피 종류 사진/section2/스타벅스메뉴/에스프레소프라푸치노.jpg","./이미지모음/커피 종류 사진/section2/스타벅스메뉴/자바침프라푸치노.jpg",
      "./이미지모음/커피 종류 사진/section2/스타벅스메뉴/제주그린한라봉모히또블렌디드.jpg","./이미지모음/커피 종류 사진/section2/스타벅스메뉴/카라멜마키야또.jpg",
      "./이미지모음/커피 종류 사진/section2/스타벅스메뉴/카페라떼.jpg","./이미지모음/커피 종류 사진/section2/스타벅스메뉴/카페아메리카노.jpg",
      "./이미지모음/커피 종류 사진/section2/스타벅스메뉴/카푸치노.jpg","./이미지모음/커피 종류 사진/section2/스타벅스메뉴/캐모마일 브렌드티.jpg",
      "./이미지모음/커피 종류 사진/section2/스타벅스메뉴/콜드블루.jpg","./이미지모음/커피 종류 사진/section2/스타벅스메뉴/트위스트피치요거트블렌디드.jpg",
      "./이미지모음/커피 종류 사진/section2/스타벅스메뉴/히비스커스브렌드티.jpg");



      var arrImg2 = new Array("./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐딸가라떼.jpg","./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐딸리쇼트케잌탐엔치노.jpg",
      "./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐레몬에이드.jpg","./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐레몬티.jpg",
      "./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐로얄밀크티.jpg","./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐바닐라탐엔치노.jpg",
      "./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐아메리카노.jpg","./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐아이스레몬티.jpg",
      "./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐아이스로얄밀크티.jpg","./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐아이스아메리카노.jpg",
      "./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐아이스카라멜마키야또.jpg","./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐아이스카페라떼.jpg",
      "./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐아이스카푸치노.jpg","./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐오렌지에이드.jpg",
      "./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐자몽에이드.jpg","./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐자바칩탐엔치노.jpg",
      "./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐카라멜마키야또.jpg","./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐카페라떼.jpg",
      "./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐카푸치노.jpg","./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐캐모마일.jpg",
      "./이미지모음/커피 종류 사진/section2/탐탐메뉴/탐콜드블루.jpg");



      var arrImg3 = new Array("./이미지모음/커피 종류 사진/section2/이디야메뉴/디딸기라떼.jpg","./이미지모음/커피 종류 사진/section2/이디야메뉴/디레몬에이드.jpg",
      "./이미지모음/커피 종류 사진/section2/이디야메뉴/디밀크티.jpg","./이미지모음/커피 종류 사진/section2/이디야메뉴/디생딸기연유플랫치노.jpg",
      "./이미지모음/커피 종류 사진/section2/이디야메뉴/디샤인히비스커스.jpg","./이미지모음/커피 종류 사진/section2/이디야메뉴/디아메리카노.jpg",
      "./이미지모음/커피 종류 사진/section2/이디야메뉴/디아이스밀크티.jpg","./이미지모음/커피 종류 사진/section2/이디야메뉴/디아이스샤인히비스커스.jpg",
      "./이미지모음/커피 종류 사진/section2/이디야메뉴/디아이스아메리카노.jpg","./이미지모음/커피 종류 사진/section2/이디야메뉴/디아이스카라멜마키야또.jpg",
      "./이미지모음/커피 종류 사진/section2/이디야메뉴/디아이스카페라떼.jpg","./이미지모음/커피 종류 사진/section2/이디야메뉴/디아이스카푸치노.jpg",
      "./이미지모음/커피 종류 사진/section2/이디야메뉴/디아이스피치얼그레이티.jpg","./이미지모음/커피 종류 사진/section2/이디야메뉴/디자몽에이드.jpg",
      "./이미지모음/커피 종류 사진/section2/이디야메뉴/디청포도에이드.jpg","./이미지모음/커피 종류 사진/section2/이디야메뉴/디초콜릿칩플랫치노.jpg",
      "./이미지모음/커피 종류 사진/section2/이디야메뉴/디카라멜마키야또.jpg","./이미지모음/커피 종류 사진/section2/이디야메뉴/디카페라떼.jpg",
      "./이미지모음/커피 종류 사진/section2/이디야메뉴/디카푸치노.jpg","./이미지모음/커피 종류 사진/section2/이디야메뉴/디콜드블루.jpg",
      "./이미지모음/커피 종류 사진/section2/이디야메뉴/디토피넛플랫치노.jpg","./이미지모음/커피 종류 사진/section2/이디야메뉴/디피치얼그레이티.jpg");



      
     var arrImg4 = new Array("./이미지모음/커피 종류 사진/section2/할리스메뉴/할다크초롤릿칩할리치노.jpg","./이미지모음/커피 종류 사진/section2/할리스메뉴/할딸기_치즈케잌할리치노.jpg",
     "./이미지모음/커피 종류 사진/section2/할리스메뉴/할딸기라떼.jpg","./이미지모음/커피 종류 사진/section2/할리스메뉴/할밀크티라떼.jpg",
     "./이미지모음/커피 종류 사진/section2/할리스메뉴/할복숭아자두스파클링.jpg","./이미지모음/커피 종류 사진/section2/할리스메뉴/할생딸기라떼.jpg",
     "./이미지모음/커피 종류 사진/section2/할리스메뉴/할아메리카노.jpg","./이미지모음/커피 종류 사진/section2/할리스메뉴/할아이스아메리카노.jpg",
     "./이미지모음/커피 종류 사진/section2/할리스메뉴/할아이스얼그레이.jpg","./이미지모음/커피 종류 사진/section2/할리스메뉴/할아이스카페라떼.jpg",
     "./이미지모음/커피 종류 사진/section2/할리스메뉴/할아이스캐모마일.jpg","./이미지모음/커피 종류 사진/section2/할리스메뉴/할얼그레이.jpg",
     "./이미지모음/커피 종류 사진/section2/할리스메뉴/할청포도스파클링.jpg","./이미지모음/커피 종류 사진/section2/할리스메뉴/할카라멜마키야또.jpg",
     "./이미지모음/커피 종류 사진/section2/할리스메뉴/할카페라떼.jpg","./이미지모음/커피 종류 사진/section2/할리스메뉴/할카푸치노.jpg",
     "./이미지모음/커피 종류 사진/section2/할리스메뉴/할캐모마일.jpg","./이미지모음/커피 종류 사진/section2/할리스메뉴/할캐모마일.jpg",
     "./이미지모음/커피 종류 사진/section2/할리스메뉴/할콜드블루.jpg","./이미지모음/커피 종류 사진/section2/할리스메뉴/할콜드블루할리치노.jpg",
     "./이미지모음/커피 종류 사진/section2/할리스메뉴/할다크초롤릿칩할리치노.jpg","./이미지모음/커피 종류 사진/section2/할리스메뉴/할다크초롤릿칩할리치노.jpg",
     "./이미지모음/커피 종류 사진/section2/할리스메뉴/할다크초롤릿칩할리치노.jpg","./이미지모음/커피 종류 사진/section2/할리스메뉴/할다크초롤릿칩할리치노.jpg");



// HTML 로드가 끝난 후 동작
window.onload=function (){
  
  showSlides(slideIndex);


  // Auto Move Slide
  var sec = 4000;
  
  setInterval(function(){
    slideIndex++;
   
    showSlides(slideIndex);
  }, sec);

}

// Next/previous controls
function moveSlides(n) {
  slideIndex = slideIndex + n
  showSlides(slideIndex);
}



function showSlides(n) {

  var slides = document.getElementsByClassName("mySlides");
  
  var size = slides.length;

  if ((n+1) > size) {
    slideIndex = 0; n = 0;
  }else if (n < 0) {
    slideIndex = (size-1);
    n = (size-1);
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[n].style.display = "block";
  
}





// html 로드 되고 시작되는 두번째 함수



// window.addEventListener('onload', function onclickSlide(num){



//   imgArr = arrImg1;
//   showSlides2(slideIndex2, imgArr);  


  
//     if(num == 1){
//       imgArr = arrImg1;
//     } else if(num == 2){
//       imgArr = arrImg2;
//     } else if (num == 3){
//       imgArr = arrImg3;
//     } else if(num == 4){
//       imgArr = arrImg4;
//     } 

//   // Auto Move Slide
  
//   var sec2 = 5000;

//   setInterval(function(){
    
//     slideIndex2++;
//      showSlides2(slideIndex2, imgArr);

//   }, sec2);

// });


// function onclickSlide(ele){

//   if(ele.value == 1){
//       return arrImg1;
//   } else if(ele.value == 2){
//     return arrImg2;
      
//   } else if (ele.value == 3){
//     return arrImg3;
//   } else if(ele.value == 4){
//     return arrImg4;
//   } 

// }


function showSlidesCoffee(num) {
  if(num == 1){
    imgArr = arrImg1;
  } else if(num == 2){
    imgArr = arrImg2;
  } else if (num == 3){
    imgArr = arrImg3;
  } else if(num == 4){
    imgArr = arrImg4;
  } 
 
  document.getElementById("slideImg").src = imgArr[slideCoffeeIndex];
}


  function printCoffee(n){

    var size = imgArr.length;

  if ((n+1) > size) {
    slideCoffeeIndex = 0; n = 0;
  }else if (n < 0) {
    slideCoffeeIndex = (size-1);
    n = (size-1);
  }
  
 
  document.getElementById("slideImg").src = imgArr[slideCoffeeIndex];
  }



// Next/previous controls
function moveSlidesCoffee(n) {
  slideCoffeeIndex = slideCoffeeIndex + n
  printCoffee(slideCoffeeIndex);
}


  


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ



// function showSlides2(n) {
  
//   let arrImg = new Array("./이미지모음/커피 종류 사진/스타벅스/스벅 아아.jpg", 
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 뜨아.jpg", "./이미지모음/커피 종류 사진/스타벅스/스벅 돌체 밀크티.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 딸기 딜라이트 요거트 블렌디드.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 바닐라크림 프라푸치노.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 돌체 블랙 밀크티.jpg", "./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 라떼.jpg", 
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 카라멜 마키야또.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 카푸치노.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 캐모마일 블랜드 티.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 아이스 히비스커스 블렌드 티.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 자바칩 프라푸치노.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 에스프레소 프라푸치노.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 제주 그린 한라봉 모히또 블렌디드.jpg", "./이미지모음/커피 종류 사진/스타벅스/스벅 카라멜 마키야또.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 카페라떼.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 카푸치노.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 캐모마일 블렌드 티.jpg", "./이미지모음/커피 종류 사진/스타벅스/스벅 콜드브루.jpg",
//   "./이미지모음/커피 종류 사진/스타벅스/스벅 트위스트 피치 요거트 블렌디드.jpg","./이미지모음/커피 종류 사진/스타벅스/스벅 히비스커스 블렌드 티.jpg");
  
//   document.getElementById("slideImg").src = arrImg;

//   var slides2 = document.getElementById("slideImg")
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

//   slides2[n].style.display = "block";
// }