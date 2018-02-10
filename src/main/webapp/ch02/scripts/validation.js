window.onload=initPage;

function initPage(){
	document.getElementById("username").onblur=checkUsername;
	document.getElementById("register").disabled=true;
}

function checkUsername(){
//	document.getElementById("status").src="images/inProcess.png";
	document.getElementById("username").className="thinking";
	request=createRequest();
	if(request==null){
		alert("Unable to create request");
	}else{
		console.log("Got the request object");
		var theName=document.getElementById("username").value;
		console.log("Original name value:"+theName);
		var username=escape(theName);
		console.log("Escapsed name value:"+username);
		var url="http://localhost:8080/HeadFirst_Ajax/checkName.do?username="+username;
		console.log("URL:"+url);
		request.open("GET",url,true);
		
		request.onreadystatechange=showUsernameStatus;
		request.send(null);
		
	}
}

function showUsernameStatus(){
	if(request.readyState==4){
		if(request.status==200){
			console.log("okay"==request.responseText);
			console.log(request.responseText);
			if(request.responseText=='okay'){
				console.log(request.responseText=='okay');
				console.log('4-200');
//				document.getElementById('status').src="images/okay.png";
				document.getElementById("username").className="approved";
				document.getElementById("register").disabled=false;
			}else{
				console.log("else");
//				document.getElementById("status").src="images/inUse.png";
				document.getElementById('username').className="denied";
				document.getElementById("username").focus();
				document.getElementById('username').select();
				document.getElementById("register").diabaled=true;
			}
			
		}
	}
}