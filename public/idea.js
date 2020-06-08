$(document).ready(function(){
  var scrollable=950;
  let outroscroll=200;
    let contentheight = $(window).height()+scrollable+outroscroll;
    $("#scrollingSpace").css({
        height:contentheight
    });
    console.log(contentheight);
    
    let panels = [
        {
          name: "panel1",
          zi: 3600,
          xi: -700,
          yi: -1300,
          SN: 0,
         
        },
        {
            name: "panel2",
            zi: 2000,
            xi: -200,
            yi: -400,
            SN: 500,
          
          },
          {
            name: "panel3",
            zi: $( window ).width(),
            xi: -200,
            yi: 0,
            SN: scrollable,
            
          },
          {
            name: "final",
            zi: $( window ).width(),
            xi: -200,
            yi:0,
            SN: scrollable+outroscroll,
            
          }
      ];

let bgz = [
      {
        name:'bg1',
        Si:0,
        Sf:500
        
      },
      {
        name:'bg2',
        Si:500,
        Sf:850
      },
      {
        name:'bg3',
        Si:850,
        Sf:10000
      }

    ]
      
    let cassettes = [
      {
        name:'cassette1',
        Si:0,
        Sf:100,
        in:false
      },
      {
        name:'cassette2',
        Si:500,
        Sf:650,
        in:false
      },
      {
        name:'cassette3',
        Si:850,
        Sf:1000,
        in:false
      }

    ]

      $("#board").css('top',panels[0].xi+'px');

      $("#board").css('left',panels[0].yi+'px');

      document.getElementById('board').style.width = panels[0].zi+"px";

      document.getElementById('board').style.height = (panels[0].zi/3)*2+"px";

      var init=$(window).scrollTop();

      setTimeout(() => {for(k=0;k<cassettes.length;k+=1){

        if((cassettes[k].Si<=init)&&(cassettes[k].Sf>init)){
          if(!cassettes[k].in==true){
          console.log('fadein cassette '+cassettes[k].name)
          document.getElementById(cassettes[k].name).classList.remove("fade-out-top");
          document.getElementById(cassettes[k].name).classList.add("fade-in-bottom");
          cassettes[k].in=true;}

        }else{
          if(cassettes[k].in==true){
          cassettes[k].in=false;
          document.getElementById(cassettes[k].name).classList.remove("fade-in-bottom");
          document.getElementById(cassettes[k].name).classList.add("fade-out-top");
          console.log('fadeout cassette '+cassettes[k].name)
      }}
         

      } 
      }, 2000);
      
      $(window).scroll(function() {
        
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if(scroll<=scrollable+outroscroll){
         for(i=1;i<panels.length;i+=1){
            if((panels[i-1].SN<=scroll)&&(scroll<panels[i].SN)){
              
             $("#board").css('top',panels[i-1].xi+(scroll-panels[i-1].SN)*((panels[i].xi-panels[i-1].xi)/(panels[i].SN-panels[i-1].SN))+'px');
             $("#board").css('left',panels[i-1].yi+(scroll-panels[i-1].SN)*((panels[i].yi-panels[i-1].yi)/(panels[i].SN-panels[i-1].SN))+'px');
             document.getElementById('board').style.width = panels[i-1].zi+(scroll-panels[i-1].SN)*((panels[i].zi-panels[i-1].zi)/(panels[i].SN-panels[i-1].SN))+"px";
             document.getElementById('board').style.height = (panels[i-1].zi+(scroll-panels[i-1].SN)*((panels[i].zi-panels[i-1].zi)/(panels[i].SN-panels[i-1].SN)))*2/3+'px';
             document.getElementById('board').style.fontSize = (panels[i-1].zi+(scroll-panels[i-1].SN)*((panels[i].zi-panels[i-1].zi)/(panels[i].SN-panels[i-1].SN)))/225+'px';
           }
          }
          
        for(j=0;j<bgz.length;j+=1){

          if(bgz[j].Si-20<=scroll&&bgz[j].Sf>scroll){
            if(scroll>=bgz[j].Sf-20){$('#'+bgz[j].name).css({opacity:(bgz[j].Sf-scroll)/20})}else{
            $('#'+bgz[j].name).css({opacity:1})}}
            else{$('#'+bgz[j].name).css({opacity:0})};

        }

        for(k=0;k<cassettes.length;k+=1){

          if((cassettes[k].Si<=scroll)&&(cassettes[k].Sf>scroll)){
            if(!cassettes[k].in==true){
            console.log('fadein cassette '+cassettes[k].name)
            document.getElementById(cassettes[k].name).classList.remove("fade-out-top");
            document.getElementById(cassettes[k].name).classList.add("fade-in-bottom");
            cassettes[k].in=true;}

          }else{
            if(cassettes[k].in==true){
            cassettes[k].in=false;
            document.getElementById(cassettes[k].name).classList.remove("fade-in-bottom");
            document.getElementById(cassettes[k].name).classList.add("fade-out-top");
            console.log('fadeout cassette '+cassettes[k].name)
        }}
           

              }
            }else{
              if(scroll>scrollable+outroscroll){
                let x=$("#board").css('top');
                $('#board').css('top',panels[panels.length-1].xi+scrollable+outroscroll-scroll+'px')
                console.log($('#board').css('top'));
        
                
              
              }

            }
        
        })
      


  });