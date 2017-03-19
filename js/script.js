$(document).ready(function () {
  var id;
   $("*").focus(function(){
     id= $(this).attr('id');
     console.log(id);
          $(this).css({border: '0 solid #f37736'}).animate({
        borderWidth: 4
    }, 500);
      $("*").keydown(function(e){
    switch (e.which){
    case 37:    
        $("#"+id).finish().animate({
            left: "-=10"
        });
        break;
    case 38:    
        $("#"+id).finish().animate({
            top: "-=10"
        });
        break;
    case 39:    
        $("#"+id).finish().animate({
            left: "+=10"
        });
        break;
    case 40:    
        $("#"+id).finish().animate({
            top: "+=10"
        });
        break;
    }
        });
      });
 $("*").focusout(function(){
         $("#"+id).css({border: "none"}).animate({
        borderWidth: 0
    }, 0); 



});

      });