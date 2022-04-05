// 버튼선택 이미지 배열에 저장
var arrImg = new Array("./answer.png","./answer2.png","./answer3.png","./answer4.png","./answer5.png","./answer6.png");



//버튼선택시 각 객체를 전달받아서  객체를 변수에 저장시킴
//저장된 변수에 객체의 id를 비교하며 id에 photo에 배열의 이미지를 각각 저장
function test(num){


    let check = new Object(num);
    if(check.id=='choice1'){

        document.getElementById("photo").src=arrImg[0];
        console.log('하이');
        
    }else if( check.id=='choice2'){
        document.getElementById("photo").src=arrImg[1];
    }else if(check.id=='choice3'){
        document.getElementById("photo").src=arrImg[2];
    }else if(check.id=='choice4'){
        document.getElementById("photo").src=arrImg[3];
    }else if(check.id=='choice5'){
        document.getElementById("photo").src=arrImg[4];
    }else if(check.id=='choice6'){
        document.getElementById("photo").src=arrImg[5];
    }


}

//심리테스트 애니메이션 구현부분 
let mainText = document.querySelector("h1");

window.addEventListener("scroll",function(){
    let value = window.screenY;

    if(value > 500){
        mainText.style.animation = "disappear 1s ease-out forwords";
        console.log("하이");
    }else{
        mainText.style.animation = "slide 1s ease-out"; 
    }
});

//심리테스트 애니메이션 구현부분 
let mainText2 = document.querySelector("h2");

window.addEventListener("scroll",function(){
    let value = window.screenY;

    if(value > 500){
        mainText2.style.animation = "disappear 1s ease-out forwords";
    }else{
        mainText2.style.animation = "slide 1s ease-out"; 
    }
});

