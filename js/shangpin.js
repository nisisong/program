(function($){
    $(document).ready(function(){
        //窗口改变，返回顶部按钮位置改变
        $(window).resize(function(){
            // $("#backT").css("left",($("html").width()-1150)/2+1150+10);
        });
        //返回顶部
        function toFixed(){
            // $("#backT").css("left",($("html").width()-1150)/2+1150+10);
                $("#roof").hover(function(){
                    $(this).find("img").fadeOut(400,function(){
                        $(this).children().stop();
                         $("#roof").html("<p>返回顶部</p>");
                          $("#roof").children("p").fadeIn(400);
                    });
                },function(){
                    $(this).find("p").fadeOut(400,function(){
                        $(this).children().stop();
                         $("#roof").html("<img src=")
                         $(this).find("img").hide().fadeIn(400);
                    });
                })
//              $("#Contact_service>a").hover(function(){
//                  $(this).find("img").fadeOut(400,function(){
//                      $(this).children().stop();
//                       $("#Contact_service>a").html("<p>联系客服</p>");
//                        $("#Contact_service>a").children("p").fadeIn(400);
//                  });
//              },function(){
//                  $(this).find("p").fadeOut(400,function(){
//                      $(this).children().stop();
//                       $("#Contact_service>a").html("<img src=../../static/img/Contact_service.png>")
//                       $(this).find("img").hide().fadeIn(400);
//                  });
//              })
            var wH=parseInt($(window).height());
            //返回顶部
            $(window).on("scroll",function(){
                var nH=parseInt($(window).scrollTop());
                if(nH>wH){
                    $("#backT").show();
                    $("#Contact_service").show();
                    // $("#backT").animate({"opacity":0.5},600);
                    $("#backT").on("click",function(){
                        $(window).scrollTop(0);
                        $(this).children().stop();
                        $(this).html("<img src=../../static/img/backT.png>")
                    })
                    return false;
                }else{
                    $("#backT").hide();
                    $("#Contact_service").hide();
                    return false;
                }
                /*if(nH>H){
                    fBox.css({"position":"fixed","left":W,"top":0});    
                }else{
                    fBox.css({"position":"static","left":0,"top":0});
                }*/
            })
        }
        toFixed();
    })
})(jQuery)