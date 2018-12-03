
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".black").css("background" , "blue");
	  }

	  else{
		  $(".black").css("background" , "#333");
 

	
  }
 


var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".logo").css("display" , "block");	  }

	  else{

		 $(".logo").css("display" , "none");
 

	
  }
 

 })
})


$(".logo").css("display" , "none");   
 $(".logo").css("display" , "none");  