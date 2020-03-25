
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
      $(".zoom img").css({
          
          transform: 'translate3d(0, -'+(35+scroll/300)+'%, 0) scale('+(300-(scroll/8.5))/100+')',
          //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
         // "-webkit-filter": "blur(" + (scroll/200) + "px)",
         // filter: "blur(" + (scroll/200) + "px)"
      });
      
      function fade(location){
        if((scroll<=location-300)||(scroll>=location+300)){
            return 0;
        }else{
            if(location<=scroll&&scroll<=location+100){
                return 1;
            }else{
                if(scroll<location){
                    return ((300-(location-scroll))/300)
                }else{
                    return((300-(scroll-location))/200  )
                }
            }
        }
      };
      
      
      function dist(x){
         return(Math.abs(x-scroll));
      };
      
      
      function poceala(location){
        if((scroll<=location-300)||(scroll>=location+300)){
            return 0;
        }else{
            if(location<=scroll&&scroll<=location+100){
                return 0;
            }else{
                if(scroll<location){
                    return (dist(location)/100)
                }else{
                    return((dist(location)-100)/100)
                }
            }
        }
      };

        $(".panel1").css({
            
            transform: 'translate3d('+(35-(scroll/30))+'%, '+(200-(scroll/15))+'%, 0) scale('+(300-(scroll/8.5))/100+')',
            //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
            "-webkit-filter": "blur(" + (poceala(0)) + "px)",
            filter: "blur(" + (poceala(0)) + "px)",
            opacity: fade(0)
        });

        $(".panel2").css({
            
            transform: 'translate3d('+(35-(scroll/140))+'%, '+(180-(scroll/15))+'%, 0) scale('+(300-(scroll/8.5))/100+')',
            //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
            "-webkit-filter": "blur(" + (poceala(500)) + "px)",
            filter: "blur(" + (poceala(500)) + "px)",
            opacity: fade(500)
        });

        $(".panel3").css({
            
            transform: 'translate3d('+(35-(scroll/140))+'%, '+(160-(scroll/15))+'%, 0) scale('+(300-(scroll/8.5))/100+')',
            //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
            "-webkit-filter": "blur(" + (poceala(1000)) + "px)",
            filter: "blur(" + (poceala(1000)) + "px)",
            opacity: fade(1000)
        });
        
        $(".panel4").css({
            
            transform: 'translate3d('+(35-(scroll/140))+'%, '+(150-(scroll/15))+'%, 0) scale('+(300-(scroll/8.5))/100+')',
            //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
            "-webkit-filter": "blur(" + (poceala(1600)) + "px)",
            filter: "blur(" + (poceala(1600)) + "px)",
            opacity: fade(1600)
        });
        

  });

  $(document).ready(function(){
    let contentheight = screen.height+1500;
    $("#content").css({
        height:contentheight
    })

    $("html").css({
        "font-size": (screen.height/80)+'px',
    })
  }
  )
 