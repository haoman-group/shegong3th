//时间对象格式化方法注册
Date.prototype.pattern=function(fmt) {         
    var o = {         
    "M+" : this.getMonth()+1, //月份         
    "d+" : this.getDate(), //日         
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%24, //小时         
    "H+" : this.getHours(), //小时         
    "m+" : this.getMinutes(), //分         
    "s+" : this.getSeconds(), //秒         
    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
    "S" : this.getMilliseconds() //毫秒         
    };         
    var week = {         
    "0" : "日",         
    "1" : "一",         
    "2" : "二",         
    "3" : "三",         
    "4" : "四",         
    "5" : "五",         
    "6" : "六"        
    };         
    if(/(y+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
    }         
    if(/(E+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "星期" : "周") : "")+week[this.getDay()+""]);         
    }         
    for(var k in o){         
        if(new RegExp("("+ k +")").test(fmt)){         
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
        }         
    }         
    return fmt;         
};

/**
 *计算要从第几页显示到第几页
 *showPageCount 要显示多少页如显示1,2,3,4,5,6就传入6
 *currentPage 当前页
 *pageCount 一共有多少页
 */ 
function calcShowPage(showPageCount,currentPage,pageCount){
	var showPage = 0;
	var i = currentPage;
	var pageMax = currentPage;
	for(;showPage<(showPageCount-1);){
		if(i > 1 ){
			i--;
			showPage++;
		}
		if(showPage >= (showPageCount-1) ){
			break;
		}
		if(pageMax < pageCount){
			pageMax++;
			showPage++;
		}
		if(i <= 1 && pageMax >= pageCount){
			break;
		}
	}
	return {"start":i,"end":pageMax};
}
//秒转时分秒
function formatSeconds(value) { 
	var theTime = parseInt(value);// 秒 
	var theTime1 = 0;// 分 
	var theTime2 = 0;// 小时 
	if(theTime > 60) { 
		theTime1 = parseInt(theTime/60); 
		theTime = parseInt(theTime%60); 
		if(theTime1 > 60) { 
			theTime2 = parseInt(theTime1/60); 
			theTime1 = parseInt(theTime1%60); 
		} 
	} 
	var result = ""+parseInt(theTime)+"秒"; 
	if(theTime1 > 0) { 
		result = ""+parseInt(theTime1)+"分"+result; 
	} 
	if(theTime2 > 0) { 
		result = ""+parseInt(theTime2)+"小时"+result; 
	} 
	return result; 
} 