function parse(){
	request = new XMLHttpRequest(); 

	request.open("GET", "http://messagehub.herokuapp.com/messages.json", true);

	request.onreadystatechange = parseData;

	request.send();
}

function parseData(){
	

	if(request.readyState ==4){

		if(request.status == 200){

			converted = JSON.parse(request.responseText);

			for(i = 0; i < 2; i++){
				document.getElementById("messages").innerHTML += "<p>" + converted[i]['content'] + " " + converted[i]['username'];
			}

		}
		else{
			window.alert("ERROR!!!");
		}
	}
}

