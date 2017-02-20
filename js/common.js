function sousuo(){
	$(function(){
				$(".kuang").click(function(){
					$(".sousuo").animate({width:300},300) ;
					$(".sousuo").css("background-color","white");
					$("#hot_list").css("display","block");
				})
				$(".sousuo").hover(function(){
					$(".sousuo").animate({width:200},300);
					$(".sousuo").css("background-color","#F8F8F8");
					$("#hot_list").css("display","none");
				})
			})
}

function app(){
	$(function(){
		$(".app").on("mousemove",function(){
			$(".tu").css("display","block");
		});
		$(".app").on("mouseout", function(){
				$(".tu").css("display","none");
			});
	})
}

function main(){
	$(function () {
			$(".nav_xia").on("mouseenter", function(){
				$(".box .con:nth-child("+($(this).index()+1)+")").css("display","block");
			});
			$(".nav_xia").on("mouseout", function(){
				$(".box .con:nth-child("+($(this).index()+1)+")").css("display","none");
			});
			$(".con").on("mouseover", function(){
				$(this).css("display","block");
			});
			$(".con").on("mouseout", function(){
				$(this).css("display","none");
			});
		});
}

function Nav(){
	
	var _black=document.getElementById("header");
	var _white=document.getElementById("nav");
	var _top;
	window.onscroll=function(){
		function s(){
			_top=document.documentElement.scrollTop || document.body.scrollTop;
			 if(_top>=54){
			_black.style.display="none";
			_white.style.position="fixed";
			
			_white.style.zIndex="10";
			_white.style.background="white";
			}else{
				_black.style.display="block";
				_white.style.position="relative";
			}
		}
		window.setTimeout(s,30)
}
	
	}

function weicht(){
	$(function(){
		$(".weicht").on("mousemove",function(){
			$(".tu").css("display","block");
		});
		$(".weicht").on("mouseout", function(){
				$(".tu").css("display","none");
			});
	})
}

window.onload=function(){
	main();
	sousuo();
	app();
	weicht();
	Nav();

}
