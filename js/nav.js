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


function miao(){
	var _timer=0;
	function timer(){
		window.clearTimeout(_timer);
		var o_date=new Date("2016/12/10");
		var s_date=new Date();
		var _milli=o_date.getTime()-s_date.getTime();
		var _date=new Date(_milli);
		/*console.log(_milli);
		console.log(_date);
		console.log(_date.getMilliseconds());*/
		document.getElementsByTagName("p")[0].innerHTML=_date.getHours()+":"+_date.getMinutes()+":"+_date.getSeconds()+":"+_date.getMilliseconds();
		_timer=window.setTimeout(timer,10);
	}
}
function meng(){
	$(function () {
		$(".hua").on("mouseover", function(){
			$(this).css("background","#f2f2f2");
			$(this).children(".two").css("opacity","0.3");	
		});
		$(".hua").on("mouseout", function(){
			$(this).css("background","#FFFFFF");
			$(this).children(".two").css("opacity","0");
		});
	});
}
window.onload=function(){
	main();
	sousuo();
	Nav();
	app();
	meng();
}
