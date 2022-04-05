


// 왼쪽 사이드바에서 원하는 영역으로 스크롤을 내리는 기능의 함수
function showContent(num){
      
    if(num == 1){
        
        for(i=0; i < document.querySelectorAll(".fullRapStarbucks *").length; i++){
            document.querySelectorAll(".fullRapStarbucks *")[i].style.display = "inline-block";
        }

        for(i=0; i < document.querySelectorAll(".fullRapTomandtoms *").length; i++){
            document.querySelectorAll(".fullRapTomandtoms *")[i].style.display = "none";
        }

        for(i=0; i < document.querySelectorAll(".fullRapEdiya *").length; i++){
            document.querySelectorAll(".fullRapEdiya *")[i].style.display = "none";
        }

        for(i=0; i < document.querySelectorAll(".fullRapHollys *").length; i++){
            document.querySelectorAll(".fullRapHollys *")[i].style.display = "none";
        }


    } else if(num == 2){
         
        for(i=0; i < document.querySelectorAll(".fullRapStarbucks *").length; i++){
            document.querySelectorAll(".fullRapStarbucks *")[i].style.display = "none";
        }
    
        for(i=0; i < document.querySelectorAll(".fullRapTomandtoms *").length; i++){
            document.querySelectorAll(".fullRapTomandtoms *")[i].style.display = "inline-block";
        }
    
        for(i=0; i < document.querySelectorAll(".fullRapEdiya *").length; i++){
            document.querySelectorAll(".fullRapEdiya *")[i].style.display = "none";
        }
        
        for(i=0; i < document.querySelectorAll(".fullRapHollys *").length; i++){
            document.querySelectorAll(".fullRapHollys *")[i].style.display = "none";
        }
    
    } else if(num == 3){
         
        for(i=0; i < document.querySelectorAll(".fullRapStarbucks *").length; i++){
            document.querySelectorAll(".fullRapStarbucks *")[i].style.display = "none";
        }
    
        for(i=0; i < document.querySelectorAll(".fullRapTomandtoms *").length; i++){
            document.querySelectorAll(".fullRapTomandtoms *")[i].style.display = "none";
        }
    
        for(i=0; i < document.querySelectorAll(".fullRapEdiya *").length; i++){
            document.querySelectorAll(".fullRapEdiya *")[i].style.display = "inline-block";
        }
    
        for(i=0; i < document.querySelectorAll(".fullRapHollys *").length; i++){
            document.querySelectorAll(".fullRapHollys *")[i].style.display = "none";
        }
    
    } else if(num == 4){    
         
        for(i=0; i < document.querySelectorAll(".fullRapStarbucks *").length; i++){
            document.querySelectorAll(".fullRapStarbucks *")[i].style.display = "none";
        }
    
        for(i=0; i < document.querySelectorAll(".fullRapTomandtoms *").length; i++){
            document.querySelectorAll(".fullRapTomandtoms *")[i].style.display = "none";
        }
    
        for(i=0; i < document.querySelectorAll(".fullRapEdiya *").length; i++){
            document.querySelectorAll(".fullRapEdiya *")[i].style.display = "none";
        }
    
        for(i=0; i < document.querySelectorAll(".fullRapHollys *").length; i++){
            document.querySelectorAll(".fullRapHollys *")[i].style.display = "inline-block";
        }
    }

}

function scrollView(n){
    
    if(n == 2){
       if(document.querySelectorAll(".fullRapStarbucks *")[0].style.display == 'inline-block'){
            document.getElementById('starbucksA2').scrollIntoView(true);

        } else if ( document.querySelectorAll(".fullRapTomandtoms *")[0].style.display == 'inline-block'){
            document.getElementById('tomandtomsA2').scrollIntoView(true);

        } else if ( document.querySelectorAll(".fullRapEdiya *")[0].style.display == 'inline-block'){
            document.getElementById('ediyaA2').scrollIntoView(true);

        } else if (document.querySelectorAll(".fullRapHollys *")[0].style.display == 'inline-block'){
            document.getElementById('hollysA2').scrollIntoView(true);
        }
    } 
    
    else if(n == 3){
        if(document.querySelectorAll(".fullRapStarbucks *")[0].style.display == 'inline-block'){
            document.getElementById('sec3Starbucks').scrollIntoView(true);
 
         } else if ( document.querySelectorAll(".fullRapTomandtoms *")[0].style.display == 'inline-block'){
            document.getElementById('sec3Tom').scrollIntoView(true);
 
         } else if ( document.querySelectorAll(".fullRapEdiya *")[0].style.display == 'inline-block'){
            document.getElementById('sec3Ediya').scrollIntoView(true);
 
         } else if (document.querySelectorAll(".fullRapHollys *")[0].style.display == 'inline-block'){
            document.getElementById('sec3Hollys').scrollIntoView(true);
     } 
    }
}