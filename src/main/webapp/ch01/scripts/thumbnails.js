window.onload=initPage;
function initPage(){
	thumbs=document.getElementById("thumbnailsPane").getElementsByTagName("img");
	for(var i=0;i<thumbs.length;i++){
		image=thumbs[i];
		image.onclick=function(){
			detailURL='images/'+this.title+'-detail.jpg';
			console.log("why???");
			document.getElementById("itemDetail").src=detailURL;
			console.log("this.title");
			getDetails(this.title);
			
		}
	}
}


function createRequest(){
	console.log("createRequest")
	try {
		request=new XMLHttpRequest();
		console.log("1");
	} catch (e) {
		try {
			request=new ActiveXObject("Msxml12.XMLHTTP");
			console.log("2");
		} catch (e) {
			try {
				request=new ActiveXObject("Microsoft.XMLHTTP");
				console.log("3");
			} catch (e) {
				request=null;
				console.log("4");
			}
		}
	}
	return request;
}

function getDetails(itemName){
	console.log("getDatils");
	request=createRequest();
	if(request==null){
		alert("Unable to create request");
		return;
	}
	
	var url="getDetails.php?ImageID="+escape(itemName);
	request.open("GET",url,true);
	
	request.onreadystatechange=displayDetails;
	request.send(null);
	
}


function displayDetails(){
	console.log("displayDetails");
	if(request.readyState==4){
		console.log("readState==4");
		if(request.status==200){
			console.log("status==200");
			detailDiv=document.getElementById("description");
			detailDiv.innerHTML=request.responseText;
		}
	}
}