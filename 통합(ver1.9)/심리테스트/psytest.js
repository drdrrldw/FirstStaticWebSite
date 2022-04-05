
var arrImg = new Array("./answer.png","./answer2.png","./answer3.png","./answer4.png","./answer5.png","./answer6.png");

function test(num){

    console.log(num.id);
    let check = new Object(num);
    console.log(check.value);
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


let mainText2 = document.querySelector("h2");

window.addEventListener("scroll",function(){
    let value = window.screenY;

    if(value > 500){
        mainText2.style.animation = "disappear 1s ease-out forwords";
    }else{
        mainText2.style.animation = "slide 1s ease-out"; 
    }
});

