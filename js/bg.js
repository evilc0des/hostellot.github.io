// JavaScript Document

$(document).ready(function(e) {
	
	$("#hostelSelect").hide();
	$(".footname-left").hide();
	$(".credits-left").hide();
	
	
	var page=1;
	var bgAnim;
	var sizeX=$('.navbar').width();
	var sizeY=(609/1365)*sizeX;
	$('.bg').css({'width':sizeX, 'height':sizeY});
	
	if(sizeX < 760){
		sizeY=(960/640)*sizeX;
		$('.bg').css({'width':sizeX, 'height':sizeY});
		$('.bg').css({'background':'url(../hostellot/assets/bg/bgMob1.jpg)', 'background-size':'100% auto' });
		$('.bg-band').css({'background':'url(../hostellot/assets/bgBand/bandMob.png)', 'background-size':'100% auto'});
		$('.jumbotron').css({'text-align':'center'});
		$('.jumbotron>h1').css({'font-size':'50px'});
	}
	
	if(sizeX < 768)
	{
		$('.institute-name').css({'text-align':'center'});
		$('.footer').css({'z-index':'200'});
	}
	
	
	
	
	
	$(window).resize(function(e) {
		sizeX=$('.navbar').width();
		
		if(sizeX > 760)
		{
			
			sizeY=(609/1365)*sizeX;
       		$('.bg').css({'width':sizeX, 'height':sizeY});
			console.log(sizeX);
			$('.bg').css({'background':'url(../hostellot/assets/bg/bg1.jpg)', 'background-size':'100% auto'});
			$('.bg-band').css({'background':'url(../hostellot/assets/bgBand/band.png)', 'background-size':'100% auto'});
			$('.jumbotron').css({'text-align':'left'});
			$('.jumbotron>h1').css({'font-size':''});
			$('.footer').css({'z-index':''});
		}
		else{
			
			sizeY=(960/640)*sizeX;
			$('.bg').css({'width':sizeX, 'height':sizeY});
			$('.footer').css({'z-index':'200'});
			if(page===1){
				$('.bg').css({'background':'url(../hostellot/assets/bg/bgMob1.jpg)', 'background-size':'100% auto'});
				$('.bg-band').css({'background':'url(../hostellot/assets/bgBand/bandMob.png)', 'background-size':'100% auto'});
				$('.jumbotron').css({'text-align':'center'});
				$('.jumbotron>h1').css({'font-size':'50px'});
			}
			else if(page===2)
			{
				$('.bg').css({'background':'url(../hostellot/assets/bg/bgMob2.jpg)', 'background-size':'100% auto'});
				$('.bg-band').css({'background':'url(../hostellot/assets/bgBand/bandMob.png) no-repeat 0'+ sizeY, 'background-size':'100% auto'});
				$('.jumbotron').css({'text-align':'center'});
				$('.jumbotron>h1').css({'font-size':'50px'});
			}
			
		}
		console.log(sizeX);
		if(sizeX < 768)
	{
		$('.institute-name').css({'text-align':'center'});
		
		$('.institute-name').removeClass('col-xs-offset-1');
		
	}
    });
	
    $('.myBtn').click(function(e) {
		
        var x = 0;  
            var y = 0;
			//Iterator for frames  
			var n = 0;
            //cache a reference to the banner  
            var banner = $(".bg-band");  
			
			page++;
  
            // set initial banner background position  
            banner.css('backgroundPosition', x + 'px' + ' ' + y + 'px');  
  if(sizeX > 760)
		{
            // scroll up background position every 90 milliseconds  
            bgAnim = window.setInterval(function() {  
                banner.css("backgroundPosition", x + 'px' + ' ' + y + 'px');  
                y=y-sizeY;
				
				if(++n === 33)
				{
					window.clearInterval(bgAnim);
				}
                //x--;  
  
                //if you need to scroll image horizontally -  
                // uncomment x and comment y  
  
            }, 45);
			
			$('.bg').addClass('change');
		}
		else if(sizeX < 760)
		{
			bgAnim = window.setInterval(function() {  
                banner.css("backgroundPosition", x + 'px' + ' ' + y + 'px');  
                y=y-50;
				
				if(y+50 < -sizeY)
				{
					window.clearInterval(bgAnim);
				}
                //x--;  
  
                //if you need to scroll image horizontally -  
                // uncomment x and comment y  
  
            }, 100);
			
			$('.bg').css({'background':'url(../hostellot/assets/bg/bgMob2.jpg)'});
		}
			$(".jumbotron").fadeOut(400);
			$(".footname-right").fadeOut(300);
	$(".credits-right").fadeOut(300);
			$("#hostelSelect").fadeIn(1000);
			$(".footname-left").fadeIn(900);
			$(".credits-left").fadeIn(900);
    });
});