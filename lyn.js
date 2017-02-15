
var tableBg = function(obj,c,cur){
  $(obj).each(function(){
		$(this).find("tr:gt(0):odd").addClass(c);  
	})
  if(cur){
	  $(obj).find('tr:gt(0)').hover(function(){
			$(this).addClass(cur).siblings().removeClass(cur);  
		})
	 }
}

$(function(){
	//��Ϊ��ҳ
		function addHome(sURL, sTitle) {
			sURL = encodeURI(sURL); 
		try{   
			window.external.addFavorite(sURL, sTitle);   
		}catch(e) {   
			try{   
				window.sidebar.addPanel(sTitle, sURL, "");   
			}catch (e) {   
				alert("��Ϊ��ҳʧ�ܣ���ʹ��Ctrl+D�������,���ֶ�����������������.");
			}   
		  }
		};	
		function SetHome(url){
			if (document.all) {
				document.body.style.behavior='url(#default#homepage)';
				document.body.setHomePage(url);
			}else{
				alert("��Ǹ������ʹ�õ�������޷���ɴ˲�����\n\n����Ҫ�ֶ�����"+url+"������Ϊ��ҳ��");
			}
		}
		$(".j-home").click(function(){
			SetHome(window.location);
		});
	//�ղ�
		function addFavorite(sURL, sTitle) {
			sURL = encodeURI(sURL); 
		try{   
			window.external.addFavorite(sURL, sTitle);   
		}catch(e) {   
			try{   
				window.sidebar.addPanel(sTitle, sURL, "");   
			}catch (e) {   
				alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������,���ֶ�����������������.");
			}   
		  }
		};
		
		$(".j-coll").click(function(){
			addFavorite(window.location.href,document.title)
		});
	//ʣ��ʱ�䵹��ʱ
  function timer(obj){
	  var _obj = $(obj),intDiff = $(obj).siblings('.j-lastTime').val();
	  if (intDiff<=0){
		  _obj.text('00:00:00');
		  return;
	  }else{
		window.setInterval(function(){
		var hour=0,minute=0, second=0;
		if(intDiff > 0){	
			hour = Math.floor(intDiff / (60 * 60));	
			minute = Math.floor(intDiff / 60) - (hour * 60);
			second = Math.floor(intDiff) - (hour * 60 * 60) - (minute * 60);
			if (minute <= 9) minute = '0' + minute;
			if (second <= 9) second = '0' + second;			
			intDiff--;
			_obj.text(hour+':'+minute+':'+second);
		}
		
		}, 1000);
	} 
  }	 
	$('.x-lastTime').each(function(){timer(this)});	
	//input��ȡ����������ʾ�ʧȥ������ʾ��ʾ��
function valuefocus(e) {
	e.each(function(){
		
  	if($(this).attr("type")=="password"){
		$(this).after('<span class="pasSpan">'+$(this).attr("data-value")+'</span>');
		var top = $(this).offset().top+6;
		var left = $(this).offset().left+6;
		$(this).next("span").css({"position":"absolute","top":top,"left":left});
		if ($(this).val() != "") {
			$(this).next("span").hide();
		};
		$(this).focus(function() {
		   $(this).next("span").hide();
		}).blur(
			  function() {
				  var value = $(this).val();
				  if ($(this).val() == "") {
					  $(this).next("span").show()
				  }
		 });
		$(this).next("span").click(function(){
			 $(this).hide();
			 $(this).prev("input").focus();
		})
	}else{
		$(this).focus(function() {
			var value = $.trim($(this).val());
			var matchVal = $.trim($(this).attr("data-value"));
			if (matchVal == value) {
				$(this).val("");
			};
		}).blur(
			  function() {
				  if ($(this).val() == "") {
					  $(this).val($(this).attr("data-value"))
				  }
		});
	};
  })

};
	valuefocus($(".l-txt"));
	valuefocus($(".ipt"));
	//�ֻ����ɽ�����ʦ����
		$(".js-pop-3g").mouseenter(function(){
			$(this).children(".pop-3g").show();	
		});
		$(".js-pop-3g").mouseleave(function(){
			$(this).children(".pop-3g").hide();	
		});
	// ������ǰ��Ʒ����
	$(".l-selectdt").click(function(){
		if($(".l-selectdd").is(":visible")==false){
			$(".l-selectdd").show();
			$(".l-select").addClass("cur");
			if($(".l-canvas").size()<=0){
				$("body").append('<div class="l-canvas"></div>');
			  };
		}else{
			$(".l-selectdd").hide();
			$(".l-select").removeClass("cur");
		}
	
	});

	$(".l-selectdd p").hover(function(){
		$(this).addClass("on").siblings('').removeClass("on")
	});

	$(".l-selectdd p").click(function(){
 		var btxt = $(this).text();
		$(".l-selectdt").html(btxt+"<i></i>");
		$(".l-selectdd").hide();
		$(".l-select").removeClass("cur");
		$(".l-canvas").remove()
	});

	 $(document).on("click",".l-canvas",function(){	
		$('.l-canvas').remove();
		$('.l-selectdd').hide();
		$('.l-select').removeClass('cur');
	});
	valuefocus($(".l-txt"));
	//����ʱ����
	
	//��Ʒ����Ч��
	$("#m-pro").mouseenter(function(){
		$(".info").stop().show();
	});	
	$("#m-pro").mouseleave(function(){
		$(".info").stop().hide();
	});	

	$(".tab-hd li").click(function(){
		$(this).addClass("now").siblings().removeClass("now");	
		$(this).parents(".sun-box").find(".tab-bd").children(".tab-list").eq($(this).index()).show().siblings('div').hide();
		$(this).parents(".sun-box-show").find(".tab-bd").children(".tab-list").eq($(this).index()).show().siblings().hide();
	});
	//�����л�ɫ ����˵������һ��ȡ��񣬵ڶ���ȡ���б�ɫ����ʽ���������������ȥ����ʽ�������Ҫ��Ϊ�գ����磺tableBg('.x-tb-pro','x-tr-bg','curr');

	  
	  tableBg(".pro-table","bg-green","");
	  tableBg(".xt-main .pro-table","xt-tab-bg","");
	  tableBg(".pe-main .pro-table","pe-tab-bg","");
	  tableBg(".h-xt-table","bg-green","cur");
	  tableBg(".m-table","bg-green","cur");
	  tableBg(".h-gonggao-table","bg-green","cur");
	  
	 /*�ԱȽ�� �����л�ɫ*/
	 $(".duibi-table").find("tr:odd td").addClass("bg-green");
	 $(".duibi-table").hover(function(){
		 $(this).find("td").addClass("cur");
		 });
	 //������
	 $(".num").each(function(){
		var mal=$(this).children("em").width();
		$(this).children("em").css('margin-left',-mal/2);
	});

});
	
	