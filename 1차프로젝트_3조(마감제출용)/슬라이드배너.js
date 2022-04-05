

// 슬라이드의 인덱스 값, 제품 이미지들의 배열을 저장함
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



// HTML 로드가 끝난 후 동작하는 함수
window.onload=function (){
  // 첫 슬라이드를 보여준뒤
  showSlides(slideIndex);

  // 자동으로 돌아가는 시간 조절 4초
      var sec = 4000;
  
  //슬라이드를 자동으로 돌아가도록 함수를 지정된 시간마다 작동시키는 setInterval함수
    setInterval(function(){
      slideIndex++;
   
      showSlides(slideIndex);
    }, sec);

}



// 이전, 다음 버튼을 통해 들어온 값으로 slideIndex의 값을 조절하여 슬라이드 조절
function moveSlides(n) {
  slideIndex = slideIndex + n
  showSlides(slideIndex);
}



function showSlides(n) {
  // 변수 선언
  var slides = document.getElementsByClassName("mySlides");
  var size = slides.length;

  // 슬라이드가 순서대로 다 돌았을 경우 다시 처음으로 가게 하는 if문
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




// 브랜드 버튼을 누르면 해당 브랜드의 제품을 보여주는 함수
function showSlidesCoffee(num) {
  // num을 통해 어떤 브랜드 인지 판별하는 if문
  if(num == 1){
    imgArr = arrImg1;
  } else if(num == 2){
    imgArr = arrImg2;
  } else if (num == 3){
    imgArr = arrImg3;
  } else if(num == 4){
    imgArr = arrImg4;
  } 
 
  // if문을 통해 판별된 브랜드를 통해 
  // 해당 브랜드 배열의 첫번째 이미지를 나타냄
  document.getElementById("slideImg").src = imgArr[slideCoffeeIndex];
}




// 이전, 다음을 통해 slideCoffeIndex의 값을 -1 또는 +1로 배열의 인덱스를 조절
// 그리고 다음 함수 printCoffee 실행
function moveSlidesCoffee(n) {
  slideCoffeeIndex = slideCoffeeIndex + n
  printCoffee(slideCoffeeIndex);
}



// 첫 함수가 배열의 첫번째 이미지를 보여준다면
// printCoffee는 다음 이미지의 회전을 나타내는 함수

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


  
