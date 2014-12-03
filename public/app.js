$( document ).ready(function() {

    
    $("#search").focus(function(){
    	console.log('Focused');
    	$('#search-dropdown').removeClass('hide');
   	});

  	$("#search").focusout(function(){
    	console.log('Focus lost');
    	$('#search-dropdown').addClass('hide');
   	}); 	




});
