function createRequest(){
	try {
		request=new XMLHttpRequest();
	} catch (e) {
		try {
			request=new ActiveXObject("Msxm12.XMLHTTP");
		} catch (e) {
			try {
				request=new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				request=null;
			}
		}
	}
	return request;
}