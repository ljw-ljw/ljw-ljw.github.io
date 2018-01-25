$('body').on('dblclick',function(){
	
	addNote()
})



function addNote(key,value){
	 // 给每一个便利贴设置一个标志
    // 当key存在的时候，id就是key ，不存在时创建id
    var id = key || Date.now();
    
    // 当value存在的时候，内容为value,不存在为空字符串
    var content = value || '';
   
    
    var text = $('<div></div>');
	text.css({
		'width':'100%',
		'height':'40px',
		'background':'rgba(254,254,0,0.1)',
		'margin-bottom':'10px',
		'id':id
	})	
		text.attr('contentEditable',true);
     	$('section .content').append(text);
    	 text.text(content); 
    	
      text.on('blur',function(){
        //  获取内容
        var text = $(this).text();
        // 存储
        // 此判断是为了确保有内容，才进行本地存储
        if(text.trim().length>0){
              localStorage.setItem(id,text);
        }else{
        	 localStorage.removeItem(id);
        	 location.reload();
        }
 
    }); 
}

//设置跑马灯开关
var flag = true;
$('header .logo').click(function(){
	if(flag){	
//			scrollamount  速度
			var speed;
			$('section .content div').each(function(index,item){
				
				speed = Math.random()*30+10;			
				$(item).wrapInner(`<marquee scrollamount=${speed}></marquee>`);
			})
	
		flag = false;
	}else{
			$('section .content div marquee').removeAttr('scrollamount');
//			$('section .content div').each(function(index,item){				
//				var str = $(item).html();
//				str = str.replace('<marquee>','');
//				str = str.replace('</marquee>','');
////				console.log(str)
//				 $(item).html(str)
//				console.log($('marquee').contents());
//			})
				$('marquee').contents().unwrap();
		flag = true;
	}
})
