
function dd(){
	var _box=document.getElementById("good_focus");
	var _mm=document.getElementById("mm");
	var _boos=document.getElementById("rel");
	var _b_img=document.getElementById("b_img");
	var body=document.getElementsByTagName("body")[0];
	_box.onmouseover=function(){
		_mm.style.display="block";
		_boos.style.display="block";
	}
	_box.onmouseout=function(){
		_boos.style.display="none";
		_mm.style.display="none";
	}
	_box.onmousemove=function(e){
		var e=e||window.event;
		var x=e.clientX;//表示鼠标相对浏览器可视窗口的当前坐标
		var y=e.clientY;
		var t=_box.offsetTop; //box是大盒子，
		var l=_box.offsetLeft;//相对于拥有position:relative属性的水平方
		console.log(l)
		var _left=x-l-_mm.offsetWidth/2;//鼠标相对浏览器可视窗口的当前坐标减去box到body的宽度减去鼠标到小盒子的宽度就是小盒子到box的宽度
		var _top=y-t-_mm.offsetHeight/2;
        _left=(_left<=0?0:(_left>=_box.offsetWidth-_mm.offsetWidth?_box.offsetWidth-_mm.offsetWidth:_left));
        _top=(_top<=0?0:(_top>=_box.offsetHeight-_mm.offsetHeight?_box.offsetHeight-_mm.offsetHeight:_top));
        //不让box上的小盒子出去给他一个判断，用三目判断：大盒子的宽减去小盒子的宽就是小盒子到大盒子的最大宽度
		_mm.style.top=_top+"px";//移动时改变小盒子的位置
		_mm.style.left=_left+"px";
		
		
		var w=_left/(_box.offsetWidth-_mm.offsetWidth);
		var h=_top/(_box.offsetHeight-_mm.offsetHeight);
		var _b_img_top=(_b_img.offsetHeight-_boos.offsetHeight)*h;
		var _b_img_left=(_b_img.offsetWidth-_boos.offsetWidth)*w;
		_b_img.style.top=-_b_img_top+"px";
		_b_img.style.left=-_b_img_left+"px";
	}
}

