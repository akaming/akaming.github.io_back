$(document).ready(function(){
    
	$(".sub_menu").hide();
	gnbMenu();

    var doc = $(window);
    //toggleBtn
    var navList = $('nav').find('ul');
    var navAnchor = navList.find('a');
    $('nav button').click(function(){
       navList.slideToggle(); 
        
    });
    navAnchor.click(function(){
        if(doc.width() < 768){
            navList.slideDown();
        }
    
    
    });
    
    //slide
    $('a[href^="#"]').click(function(slide){
        var target = $($(this).attr('href'));
        if(target.length){
            slide.preventDefault();
            $('html,body').animate({
               scrollTop:target.offset().top 
            },1000);
        }
    });
    
    
    //resize window
    doc.resize(function(){
        if($(this).width() >= 768){
            navList.show();
        }else{
            navList.hide();
        }
    });
    
    //bxslider
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true
    });
    
  
       
});


//gnbMenu
$.stopEvent = function( e ){
	//e = e || window.event;
	e = e.originalEvent || e || window.event;
	if( typeof e.preventDefault === 'function' ){ // other ...
		e.preventDefault();
		e.stopPropagation();
	} else { // IE
		e.returnValue = false;
		e.cancelBubble = true;
	};
};


function gnbMenu(){
	$(".gnb_menu > li > a").mouseenter(function(){
		$(this).parent().addClass("on");
		$(this).parent().siblings().removeClass("on");

		$(this).next().slideDown(200);
		$(this).parent().siblings().find("ul").slideUp(200);
	});
	
	$("header").mouseleave(function(){
		$(".sub_menu").hide();
	});


	$(".gnb_menu li > ul > li > a").click(function(){
		$(this).parent().parent().hide();
		$.stopEvent(e);
		return false;
	});	
}

