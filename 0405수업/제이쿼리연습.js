


function changeYellow(){
    let el = document.getElementById("loremTitle1");
    // 한번 더 클릭하면 다시 검은색으로 바꿔보세요. 왔다리갔다리
    if(el.style.color == 'yellow'){
        el.style.color = 'black';
    }else{
        el.style.color = 'yellow';
    }
}

//빨간색 배경으로 왔다리 갔다리
function toggleRed(){
    let el = document.getElementsByClassName("changeRed");
    for (let i of el){
        if(i.style.backgroundColor == 'red'){
            i.style.backgroundColor = null;
        }else{
            i.style.backgroundColor = 'red';
        }
    }
}

function useCssSelector(){
    let el = document.querySelector('#para1');
    el.style.color = "green";
}



function makeDom(){
    let heading = document.createElement("h1");
    let maked_text = document.createTextNode("동적으로로 만든 컨텐츠");
    heading.appendChild(maked_text);
    console.log(heading);
    document.getElementById("here").appendChild(heading);
}




function chSizeDouble(){
    let image = document.getElementsByTagName('img');
    for(let el of image){
        el.width *= 2;
    }
}

function chSizeHalf(){
    let image = document.getElementsByTagName('img');
    for(let el of image){
        el.width *= 0.5;
    }
}





// 1. 순수 자바스크립트
let a = document.querySelector('#where1');
a.addEventListener('click', whereTouch1);

// 2. 제이쿼리 사용
let b = $('#where2')
b.click(whereTouch2);



function whereTouch1(){
    
    alert("어딜만져요오옷!");
    
   
    if($(this).text()=='터치1'){
        $(this).text("hahahaha");
    } else{
        $(this).text("터치1");
    }
}



function whereTouch2(){
    alert("어딜만져요오올읾ㄴ이라ㅓ!");
}


// 토글
// 1. Javascript토글 클릭할때마다 안의 내용 사라졌다 보이게 하기


// 2. Jquery토글 클릭할때마다 안의 내용 사라졌다 보이게 하기
//          .toggle 함수는 .show()와 .hide()를 반복 수행




$("#toggle2").click(toggle2);

function toggle2(){
    $('#toggle2 span').toggle('500');
    // 500밀리세컨드는 0.5초를 말한다. 0.5초동안 깜박인다.
}