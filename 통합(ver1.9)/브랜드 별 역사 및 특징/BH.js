

starbucks = document.getElementById("fullRapStarbucks")
tomandtoms = document.getElementById(".fullRapTomandtoms *")
ediya = document.getElementById(".fullRapEdiya *")
hollys = document.getElementById(".fullRapHollys *")


starbucksEvery = starbucks.childNodes;


function showContent(num){

        console.log("잘넘어옴");
    if(num == 1){
        
        for(i=0; i < starbuck.length; i++){
            starbucks[i].style.display = 'block'
            tomandtoms[i].style.display = 'none'
            ediya[i].style.display = 'none'
            hollys[i].style.display = 'none'
        }

        
    } else if(num == 2){
        document.getElementById("fullRapTomandtoms").style.display = "block";
        console.log("잘넘어옴");
    } else if(num == 3){
        document.getElementById("fullRapEdiya").style.display = "block";
        console.log("잘넘어옴");
    } else if(num == 4){
        document.getElementById("fullRapHollys").style.display = "block";
        console.log("잘넘어옴");
    }
    




}