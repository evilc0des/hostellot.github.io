// JavaScript Document

$(document).ready(function(e) {
	
	$("#hostelSelect").hide();
	
    $('.myBtn').click(function(e) {
		
        var x = 0;  
            var y = 0;
			//Iterator for frames  
			var n = 0;
            //cache a reference to the banner  
            var banner = $(".bg-band");  
  
            // set initial banner background position  
            banner.css('backgroundPosition', x + 'px' + ' ' + y + 'px');  
  
            // scroll up background position every 90 milliseconds  
            var bgAnim = window.setInterval(function() {  
                banner.css("backgroundPosition", x + 'px' + ' ' + y + 'px');  
                y=y-609;
				
				if(++n === 33)
				{
					window.clearInterval(bgAnim);
				}
                //x--;  
  
                //if you need to scroll image horizontally -  
                // uncomment x and comment y  
  
            }, 65);
			
			$('.bg').addClass('change');
			$(".jumbotron").fadeOut(400);
			$("#hostelSelect").fadeIn(1000);
    });
});