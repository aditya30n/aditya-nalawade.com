 
$(document).ready(function () {

    $(".work").hide();
$("#work-description").show();
  $("#sdsu").click(function(){   
    $("#ibmer").removeClass("click").addClass("company");
    $("#asher").removeClass("click").addClass("company"); 
    $("#sdsu").addClass("click");  
    $("#ash").hide();
    $("#ibm").hide();
    $("#work-description").hide();
    $("#ucsd").slideDown("slow");    
  });

 $("#ibmer").click(function(){
      $("#sdsu").removeClass("click").addClass("company");
    $("#asher").removeClass("click").addClass("company");
   $("#ibmer").addClass("click");  
    $("#ash").hide();
    $("#ucsd").hide();
    $("#work-description").hide();
    $("#ibm").slideDown("slow");
    
  });

$("#asher").click(function(){
    $("#sdsu").removeClass("click").addClass("company");
    $("#ibmer").removeClass("click").addClass("company");
 $("#asher").addClass("click");    
     $("#ucsd").hide();
    $("#ibm").hide();
    $("#work-description").hide();
    $("#ash").slideDown("slow");
   
  });

});


$(document).ready(function(){
$(".hide-project").hide();

  $("#movies").click(function(){
    
    $(".projects").animate({width:'70%',opacity:'.8',height:'50px',fontSize:'1.5em'},"fast");
    $("#movies").animate({width:'120%',opacity:'1', height:'60px' ,fontSize:'2em'},"slow");
    $(".projects").removeClass("projects-click");
    $("#movies").addClass("projects-click");
    $(".hide-project").hide();
$(".projects-details").hide();
$("#movie-info").fadeIn(2000);
  });

$("#bank").click(function(){
  
  $(".projects").animate({width:'70%',opacity:'.8',height:'50px',fontSize:'1.5em'},"fast");
    $("#bank").animate({width:'120%',opacity:'1',height:'60px',fontSize:'2em'},"slow");
$(".projects").removeClass("projects-click");
    $("#bank").addClass("projects-click");
     $(".hide-project").hide();
    $(".projects-details").hide();
    $("#bank-info").fadeIn(2000);
  });

$("#pob").click(function(){
  
  $(".projects").animate({width:'70%',opacity:'.8',height:'50px',fontSize:'1.5em'},"fast");
    $("#pob").animate({width:'120%',opacity:'1',height:'60px',fontSize:'2em'},"slow");
    $(".projects").removeClass("projects-click");
    $("#pob").addClass("projects-click");
     $(".hide-project").hide();
    $(".projects-details").hide();
    $("#pob-info").fadeIn(2000);
  });

$("#pcsuite").click(function(){
  
  $(".projects").animate({width:'70%',opacity:'.8',height:'50px',fontSize:'1.5em'},"fast");
    $("#pcsuite").animate({width:'120%',opacity:'1',height:'60px',fontSize:'2em'},"slow");
    $(".projects").removeClass("projects-click");
    $("#pcsuite").addClass("projects-click");
     $(".hide-project").hide();
    $(".projects-details").hide();
    $("#pcsuite-info").fadeIn(2000);
  });

$(window).scroll(function(){



        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object){                
                  $(this).animate({'opacity':'1'},1500);                    
              }                    
        });     
});

(function () {
    var previousScroll = 0;
    var elemTop = $("#topEffect").offset().top;
    var elemBottom = $("#work-exp").offset().top;
$('.graduate').animate({left: '-30%'},1200);
$('.undergrad').animate({right: '-30%'}, 1200);
var effect = 'out';

    $(window).scroll(function () {
       var currentScroll = $(this).scrollTop();
            
    if (currentScroll > previousScroll){
      if((elemBottom -500 < currentScroll)){
        if(effect == 'in'){
          $('.graduate').animate({left: '-30%'},1200);
          $('.undergrad').animate({right: '-30%'}, 1200);
          effect = 'out';
        }
      }            

    else if((elemTop> currentScroll)){
        if(effect == 'out'){
         $('.graduate').animate({left: 0},1200);
         $('.undergrad').animate({right: 0}, 1200);
         effect = 'in'
        }
      }
    }

    else {

        if(elemTop  > currentScroll){
          if(effect == 'in'){
          $('.graduate').animate({left: '-30%'},1200);
          $('.undergrad').animate({right: '-30%'}, 1200);
          effect = 'out'
          }
      }
        else if((elemBottom -400 > currentScroll)){
          if(effect == 'out'){
           $('.graduate').animate({left: 0},1200);
           $('.undergrad').animate({right: 0}, 1200);
           effect = 'in'
          }
        }
    }

previousScroll = currentScroll;
});
}());



});
