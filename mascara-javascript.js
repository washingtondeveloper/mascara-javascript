onload = function () {
	document.getElementById("data").onkeyup = function(e){
		var data = this;//document.getElementById("data");
		var regex = /[0-9]/;
		if(!regex.test(data.value))	data.value = "";
		if(data.value.length == 2) data.value += "/";
		if(data.value.length == 5)	data.value += "/";
		if(data.value.length >= 10)	data.value = data.value.slice(0, 10);
	}
	
	document.getElementById("cep").onkeyup = function(e){
		var data = this;//document.getElementById("cep");
		var regex = /[0-9]/;
		if(!regex.test(data.value))	data.value = "";
		if(data.value.length == 5) data.value += "-";
		if(data.value.length >= 10)	data.value = data.value.slice(0, 9);
	}
	
	document.getElementById("cpf").onkeyup = function(e){
		var data = this;//document.getElementById("cpf");
		var regex = /[0-9]/;
		if(!regex.test(data.value))	data.value = "";
		if(data.value.length == 3) data.value += ".";
		if(data.value.length == 7) data.value += ".";
		if(data.value.length == 11) data.value += "-";
		if(data.value.length >= 14)	data.value = data.value.slice(0, 14);
	}
}