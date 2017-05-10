
var map = new BMap.Map("mymap");
map.addControl(new BMap.NavigationControl()); 
map.enableScrollWheelZoom(true);
// 创建地址解析器实例     
var myGeo = new BMap.Geocoder();
// 将地址解析结果显示在地图上，并调整地图视野

myGeo.getPoint("杭州市", function(point) {
  if (point) {
    map.centerAndZoom(point, 10);
    map.addOverlay(new BMap.Marker(point));

  }
}, "杭州市");

var local = new BMap.LocalSearch(map, {
  	renderOptions: {
    	map: map,
    	panel: "result"
  	}
});


$(init)
function init()
{
	$("#lake").click(function(){
		map.clearOverlays(); 
		myGeo.getPoint("西湖风景区", function(point) {
		  if (point) {
		    map.centerAndZoom(point, 10);
		  }
		}, "杭州市");
		local.searchNearby("西湖宾馆", "西湖风景区");
	});

	$("#ques").click(function(){
		map.clearOverlays(); 
	    var start = "杭州师范大学仓前新校区" ,end = "西湖宾馆";
	    var transit = new BMap.TransitRoute(map, {
			renderOptions: {
				map: map, 
				panel: "result"
			}, 
			onResultsHtmlSet : function(){$("#result").show()}  	
	    });
	    transit.search(start,end);		
	});	


	$("#school").click(function(){
		map.clearOverlays(); 
		myGeo.getPoint("杭州师范大学仓前新校区", function(point) {
			if (point) {
		    	map.centerAndZoom(point, 17);
		  }
		}, "杭州市");
		var data_info = [[120.013179,30.295058,"杭州师范大学体育场","src='exp0901.png'"],
							 [120.01908,30.29569,"杭州师范大学3号餐厅","src='exp0904.png'"],
							 [120.021793,30.297826,"杭州师范大学图书馆","src='exp0905.png'"],
							 [120.019215,30.297171,"杭州师范大学教学楼群","src='exp0902.png'"],
							 [120.016323,30.296688,"杭州师范大学寝室楼群","src='exp0903.png'"],
							 [120.016983,30.295378,"杭州师范大学超市","src='exp0906.png'"],
							];

		for(var i=0;i<data_info.length;i++){
			var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
			var content1 = data_info[i][2];
			var content2 = data_info[i][3];
			
		    var myIcon = new BMap.Icon("旗子.png", new BMap.Size(32,32));
			var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]),{icon:myIcon});  // 创建标注
			map.addOverlay(marker);              // 将标注添加到地图中


			var sContent="<div style='display: flex;justify-content: center;align-items:center;height: 210px;width: 250px; flex-direction: column;'>"+
						"<img height='150' width='240' style='border: 1px solid #ccc;'"+content2+">"+
						"<div style='display: flex;justify-content: center;width: 240px'>"+
						"<div style='display: flex;flex-direction: column;width: 160px'>"+
						"<div style='font-weight: 600;font-size: 17px'>"+content1+"</div>"+
						"<div style='color: orange'><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i></div>"+
						"<div style='color: #ccc; font-size:13px'>评价不错</div></div><div style='width: 80px;display: flex;align-items: center;justify-content:flex-end;'>"+
						"<div style='display: flex;align-items: center;justify-content: center; height: 20px; width:75px; color: white;background: linear-gradient(#ff9000, #ff7900);font-size: 15px;font-weight: 600;border-radius:3px;'>查看详情</div></div></div></div>";	
			
			addClickHandler(sContent,marker);
		}
		function addClickHandler(sContent,marker){
			marker.addEventListener("click",function(e){
				openInfo(sContent,e)}
			);
		}
		function openInfo(sContent,e){
			var p = e.target;
			var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
			var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象 
			map.openInfoWindow(infoWindow,point); //开启信息窗口
		}		
	});



}
