window.onload=initPage;

function initPage(){
	var tags=document.getElementById("tabs").getElementsByTagName("a");
	for(var i=0;i<tags.length;i++){
		var currentTag=tags[i];
		currentTag.onmouseover=showHint;
		currentTag.onmouseout=hideHint;
		currentTag.onclick=showTab;
	}
	
	
	var buttons=document.getElementById('navigation').getElementsByTagName('a');
	for(var i=0;i<buttons.length;i++){
		var currentBtn=buttons[i];
//		currentBtn.onmouseover=showHint;
//		currentBtn.onmouseout=hideHint
//		currentBtn.onclick=showTab;
//		currentBtn.onmouseover=buttonOver;
//		currentBtn.onmouseout=buttonOut;
		
		currentBtn.onclick=showTab;
//		currentBtn.addEventListener("mouseover",showHint,false);
//		currentBtn.addEventListener('mouseover',buttonOver,false);
//		currentBtn.addEventListener('mouseout',hideHint,false);
//		currentBtn.addEventListener('mouseout',buttonOut,false);
		
		addEventHandler(currentBtn,"mouseover",showHint);
		addEventHandler(currentBtn,"mouseout",hideHint);
		addEventHandler(currentBtn,"mouseover",buttonOver);
		addEventHandler(currentBtn,"mouseout",buttonOut);
	}
	
}

var welcomePaneShowing=true;

function showHint(e){
	if(!welcomePaneShowing){
		return;
	}
	var me=getActivatedObject(e);
	switch(me.title){
	case"beginners":
		var hintText="Just getting started? Come join us!";
		break;
	case "intermediate":
		var hintText="Take your flexibility to the next level!";
		break;
	case "advanced":
		var hintText="Perfectly join your body and mind with these intensive workouts.";
		break;
	default:
		var hintText="Click a tab to display the course schedule for the class";
	}
	
	var contentPane=document.getElementById("content");
	contentPane.innerHTML="<h3>"+hintText+"</h3>";
}

function hideHint(){
	if(welcomePaneShowing){
		var contentPane=document.getElementById("content");
		contentPane.innerHTML="<h3>Click a tab to display the course schedule for the class</h3>";
		
	}
}

function showTab(e){
	var me=getActivatedObject(e);
	
	var selectedTab=me.title;
	if(selectedTab=='welcome'){
		welcomePaneShowing=true;
		document.getElementById("content").innerHTML="<h3>Click a tab to display the course schedule for the class</h3>";
		
	}else{
		welcomePaneShowing=false;
	}
	
	
	
	var tabs=document.getElementById("tabs").getElementsByTagName("a");
	for(var i=0;i<tabs.length;i++){
		var currentTab=tabs[i];
		if(currentTab.title==selectedTab){
			currentTab.className='active';
		}else{
			currentTab.className='inactive';
		}
	}

	var request=createRequest();
	if(request==null){
		alert("Unable to create request");
		return;
	}
	request.onreadystatechange=showSchedule;
	request.open("GET",selectedTab+".html",true);
	request.send(null);
}

function showSchedule(){
	if(request.readyState==4){
		if(request.status==200){
			document.getElementById("content").innerHTML=request.responseText;
		}
	}
}

function buttonOver(e){
	var me=getActivatedObject(e);
	me.className="active";
}

function buttonOut(){
	var me=getActivatedObject(e);
	me.className="";
}