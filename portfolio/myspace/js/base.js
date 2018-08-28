$(document).ready(function(){
    
    var doc = $(window);
    //toggleBtn
    var navList = $('nav').find('ul');
    var navAnchor = navList.find('a');
    $('nav button').click(function(){
       navList.slideToggle(); 
        
    });
    navAnchor.click(function(){
        if(doc.width() < 768){
            navList.slideUp();
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
    
    //modal window
    $(".modal").lightbox();
        
});