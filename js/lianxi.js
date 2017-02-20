
//返回顶部和固定
$(function () {
              //绑定滚动条事件  
            $(window).bind("scroll", function () {  
                var sTop = $(window).scrollTop();  
                var sTop = parseInt(sTop);  
                if (sTop >= 480) {  
                    if (!$("#lian").is(":visible")) {  
                          
                            $("#roof").css("display","block"); 
                            $("#lian").css("display","block");
                                               
                    }  
                }  
                else {  
                    if ($("#lian").is(":visible")) {  
                        
                            $("#roof").css("display","none");
                            $("#lian").css("display","none");
                                                
                    }  
                }   
            });  
	            $("#roof").click(function(){
					$("html,body").animate({scrollTop: 0}, 500);	
				});
	
				$(function(){
					$("#roof").on("mousemove",function(){
						$(".bu").css("display","none");
						$(".ding").css("display","block");
					});
					$("#roof").on("mouseout", function(){
						$(".bu").css("display","block");
						$(".ding").css("display","none");
					});
				})
        })  