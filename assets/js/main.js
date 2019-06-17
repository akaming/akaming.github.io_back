
     //지도표시
     function initMap() {
        var uluru = {lat: 37.544023, lng: 126.872009};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
    
    //메뉴이동
    $('a[href^="#"]').click(function(slide){
        var target = $($(this).attr('href'));
        if(target.length){
            slide.preventDefault();
            $('html,body').animate({
               scrollTop:target.offset().top 
            },1000);
        }
    });
    
    //스크롤시 메뉴 색상 변경
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 943 ) {
            $(".portfolio-header").addClass("scroll-changes");
        }else{
            $(".portfolio-header").removeClass("scroll-changes");
        }
    });


    //popup 
        var popup = document.getElementById("popup-box");
        var OpenBtn = document.getElementById("popup-btn");
        var CloseBtn = document.getElementById("popup-close");
        
        OpenBtn.onclick = function() {
            popup.style.display = "block";
        }
    
        OpenBtn.onclick = function() {
            popup.style.display = "block";
        }
        CloseBtn.onclick = function() {
            popup.style.display = "none";
        }
    

   





