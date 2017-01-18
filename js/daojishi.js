//$(document).ready(function(){
//	
//})
function seckill_tick(){
	var time=$("#time").data("seckill");
	if(!time)return false;
	var t=setInterval(function(){
                time--;
                h=parseInt(time/60/60)<10 ? "0"+parseInt(time/60/60) : parseInt(time/60/60);
                var sT = time%3600;
                m=parseInt(sT/60)<10 ? "0"+parseInt(sT/60) :  parseInt(sT/60);
                    sT = sT%60;
                var s=parseInt(sT)<10 ? "0"+parseInt(sT) : parseInt(sT);
				$("#time>span").eq(0).html(h);
				$("#time>p>span").eq(1).html(m);
				$("#time>p>span").eq(2).html(s);
                if(time<=0){
                    clearInterval(t);
                    location.reload();
                }
            },1000);
}
seckill_tick();