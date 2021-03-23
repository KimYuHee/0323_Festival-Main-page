$(function(){

    ///////////////gnb////////////////////////////////

    $("ul#mainMenu>li").mouseover(function(){
        $(this).find("ul.subMenu").stop().slideDown(1000);
    });
    $("ul#mainMenu>li").mouseout(function(){
         $(this).find("ul.subMenu").stop().slideUp(800);
    });

    //////////////slide//////////////////////////////

    setInterval(fnSlide,3000);

    function fnSlide(){

        $("#slideFrame a:first-child").fadeOut(500);
        $("#slideFrame a:nth-child(2)").fadeIn(
            1000,
            function(){
                $("#slideFrame a:first-child").insertAfter("#slideFrame a:last-child");
            }
        );
  }

  ///////////////////layerPopup/////////////////////

    $(".layerPoint").click(function(){
        $("#layerBG").css({"display":"block"});
    });
     $("#closeBtn").click(function(){
        $("#layerBG").css({"display":"none"});
    });
});
