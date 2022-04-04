

    



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