$( document ).ready(function() {

    
    $("#search").focus(function(){
    	console.log('Focused');
    	$('#search-dropdown').removeClass('hide');
   	});

  	$("#hide-box").click(function(){
    	console.log('Focus lost');
    	$('#search-dropdown').addClass('hide');
   	}); 	




});
