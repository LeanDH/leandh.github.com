$(init)
var cnt=3;
var ind=0;
function init()
{
	$(".ui-p1-cont2").hide();
	$(".ui-p1-box").click(function(){
		var num=$(this).index();
		$(".ui-p1-bigger").text(num+1);
		$(".ui-p1-cont2").show();
	});
	$(".ui-p1-cont2").click(function(){
		$(".ui-p1-cont2").fadeOut(100);
	});



	$(".ui-p2-page-con").eq(1).hide();
	$(".ui-p2-page-con").eq(2).hide();
	$(".ui-p2-menu-box").eq(0).css("background-color","lightgray");
	$(".ui-p2-menu-box").click(function(){
		$(".ui-p2-menu-box").eq(ind).css("background-color","white");
		$(".ui-p2-page-con").eq(ind).hide();
		ind=$(this).index();
		$(".ui-p2-page-con").eq(ind).show();
		$(".ui-p2-menu-box").eq(ind).css("background-color","lightgray");
	});



	$(".ui-p3-button").click(function(){
		cnt=cnt+1;
		$(".ui-p3-box:last").after("<div class='ui-p3-box'><div class='ui-p3-box-lab'></div><div class='ui-p3-box-button'>Detele</div></div>");
		$(".ui-p3-box-lab:last").text(cnt);
		console.log(cnt);
	});
	$(".ui-p3-box-button").live("click",function(){//将事件绑定到对象上
		cnt=cnt-1;
		$(this).parent().remove();
		for(var i=0;i<cnt;i++)
		{
			$(".ui-p3-box-lab").eq(i).text(i+1);
		}	
		console.log(cnt);
	});
}

