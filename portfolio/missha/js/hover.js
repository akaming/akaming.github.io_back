
$(document).ready(function(){
    $(".prd_over").css('opacity','0');
    $(".prd_box").each(function(){
        $(this).hover(
        function(){
            $(this).find(".prd_over").stop().animate({"opacity":"1"},"1");},
            function(){
            $(this).find(".prd_over").stop().animate({"opacity":"0"},"1");
        });
    });     
});
