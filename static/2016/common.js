//�Ͱ汾���������console.log����Ҳ������Ϊĳ��console.logû�ɵ��ڵͰ汾������ϳ�������
(function(){
	if (typeof(console)!="object"){
		window.console = {
			log:function(inStr){
				//alert(inStr);
			}
		};
	}
})(window);