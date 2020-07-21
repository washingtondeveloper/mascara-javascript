onload = function () {
	
	/*
	* Celular
	*/
	let data = document.getElementById("cel");
	if(!data) return;
	data.onkeyup = function (e) {
	  var data = this;
	  if (/[a-z]/gi.test(data.value))
	    data.value = data.value.slice(0, data.value.length - 1);

	  if (data.value.length === 1) data.value = `(${data.value}`;
	  if (data.value.length == 3) data.value += ")";
	  if (data.value.length == 4) data.value += " ";
	  if (data.value.length == 9) data.value += "-";
	  if (data.value.length >= 14) data.value = data.value.slice(0, 14);
	};
	
	/**
	 * Data
	 */
	let data = document.getElementById("data");
	if(!data) return;
	data.onkeyup = function(e){
		var data = this;//document.getElementById("data");
		var regex = /[0-9]/;
		if(!regex.test(data.value))	data.value = "";
		if(data.value.length == 2) data.value += "/";
		if(data.value.length == 5)	data.value += "/";
		if(data.value.length >= 10)	data.value = data.value.slice(0, 10);
	}
	
	/**
	 * CEP
	 */
	let cep = document.getElementById("cep");
	if(!cep) return;
	cep.onkeyup = function(e){
		var data = this;//document.getElementById("cep");
		var regex = /[0-9]/;
		if(!regex.test(data.value))	data.value = "";
		if(data.value.length == 5) data.value += "-";
		if(data.value.length >= 10)	data.value = data.value.slice(0, 9);
	}
	
	/**
	 * CPF
	 */
	let cpf = document.getElementById("cpf");
	if(!cpf) return;
	cpf.onkeyup = function(e){
		var data = this;//document.getElementById("cpf");
		var regex = /[0-9]/;
		if(!regex.test(data.value))	data.value = "";
		if(data.value.length == 3) data.value += ".";
		if(data.value.length == 7) data.value += ".";
		if(data.value.length == 11) data.value += "-";
		if(data.value.length >= 14)	data.value = data.value.slice(0, 14);
	}

	/**
	 * Moeda Em Desenvolvimento
	 */
	let cont = 0;
	let moeda = document.getElementById("moeda");
	if(!moeda) return;
	moeda.onkeyup = function (e){
		var moeda =  this; //document.getElementById("moeda");
		var regex = /[0-9]/;
	
		//Validação de teclas A-Za-z não permitivel
		if(!regex.test(moeda.value)) moeda.value = "";
		if(e.which == 8) cont = 0;
		//A primeira mascara sendo utilizada colocando R$ 0,0+ o valor digitado sendo numero
		if(moeda.value.length == 1){
			moeda.value = "R$ "+"0,0" + moeda.value;
			return;
		}
		/*
		* A partir daqui a validação será para reagrupar os numeros para formatação
		*
		*/
		if(moeda.value.length >= 8) {
	
			var ultimo = moeda.value.substring(7)
			var atual = moeda.value.charAt(6);
			if(cont == 1) {
				moeda.value = "R$ " +moeda.value.substring(5,6) +","+atual+ultimo;
				console.log("1 Cont: " + cont);
				cont++;
				return;
			}
	
			if(cont == 2){
				moeda.value = moeda.value.substring(0,4)+moeda.value.substring(5,6) +","+atual+ultimo;
				console.log("2 Cont: " + cont);
				cont++;
				return;
			}
	
			if(cont == 3){
				moeda.value = moeda.value.substring(0,5)+moeda.value.substring(6,7)+","+ultimo;
				console.log("3 Cont: " + cont);
				cont++;
				return;
			}
	
			if(cont == 4){
				var nova = moeda.value.substring(0,6)+moeda.value.substring(7,8);
				moeda.value = nova.substring(0, 4)+"."+nova.substring(4)+","+ultimo.substring(1);
				console.log("4 Cont: " + cont);
				cont++
				return;
			}
	
			if(cont == 5){
				var part1 = moeda.value.substring(0, 4);
				var part2 = moeda.value.substring(5,6);
				var partMeio = moeda.value.substring(6,8)+moeda.value.substring(9,10);
				var partFinal = moeda.value.substring(10);
				moeda.value = part1+part2+"."+partMeio+","+partFinal;
				console.log("5 Cont: " + cont);
				cont++;
				return;
			}
	
			if(cont == 6){
				var part1 = moeda.value.substring(0, 5);
				var part2 = moeda.value.substring(6,7)
				var partMeio = moeda.value.substring(7,9)+moeda.value.substring(10,11);
				var partFinal = moeda.value.substring(11);
				moeda.value = part1+part2+"."+partMeio+","+partFinal;
				console.log("6 Cont: " + cont);
				cont++;
				return;
			}
	
			if(cont == 7){
				var part1 = moeda.value.substring(0, 4);
				var part2 = moeda.value.substring(4,6)+moeda.value.substring(7,8);
				var partMeio = moeda.value.substring(8,10)+moeda.value.substring(11,12);
				var partFinal = moeda.value.substring(12);
				moeda.value = part1+"."+part2+"."+partMeio+","+partFinal;
				console.log("7 Cont: " + cont);
				cont++;
				return;
			}
	
			if(cont == 8){
				var part1 = moeda.value.substring(0, 4);
				var part2 = moeda.value.substring(5,6)+".";
				var part3 = moeda.value.substring(6,8)+moeda.value.substring(9,10)+".";
				var partMeio = moeda.value.substring(10,12)+moeda.value.substring(13,14)+",";
				var partFinal = moeda.value.substring(14)
				moeda.value = part1+part2+part3+partMeio+partFinal;
				console.log("8 Cont: " + cont);
				cont++;
				return;
			}
	
			if(cont == 9){
				var part1 = moeda.value.substring(0,5)+moeda.value.substring(6,7)+".";
				var part2 = moeda.value.substring(7,9)+moeda.value.substring(10,11)+".";
				var part3 = moeda.value.substring(11,13)+moeda.value.substring(14,15)+",";
				var partFinal = moeda.value.substring(15);
				moeda.value = part1+part2+part3+partFinal;
				console.log("9 Cont: " + cont);
				cont++;
				return;
			}
	
			if(cont == 10){
				var part1 = moeda.value.substring(0, 4)+".";
				var part2 = moeda.value.substring(4, 6)+moeda.value.substring(7,8)+".";
				var part3 = moeda.value.substring(8,10)+moeda.value.substring(11,12)+".";
				var partMeio = moeda.value.substring(12, 14)+moeda.value.substring(15,16)+",";
				var partFinal = moeda.value.substring(16);
				moeda.value = part1+part2+part3+partMeio+partFinal;
				console.log("10 Cont: " + cont);
				cont++
				return;
			}
	
			if(cont == 11){
				var part1 = moeda.value.substring(0, 4)+moeda.value.substring(5,6)+".";
				var part2 = moeda.value.substring(6,8)+moeda.value.substring(9,10)+".";
				var part3 = moeda.value.substring(10,12)+moeda.value.substring(13,14)+".";
				var partMeio = moeda.value.substring(14, 16)+moeda.value.substring(17,18)+",";
				var partFinal = moeda.value.substring(18);
				moeda.value = part1+part2+part3+partMeio+partFinal;
				console.log("11 Cont: " + cont);
				cont++;
				return;
			}
	
			if(cont == 12){
				var part1 = moeda.value.substring(0,5)+moeda.value.substring(6,7)+".";
				var part2 = moeda.value.substring(7,9)+moeda.value.substring(10,11)+".";
				var part3 = moeda.value.substring(11,13)+moeda.value.substring(14,15)+".";
				var partMeio = moeda.value.substring(15, 17)+moeda.value.substring(18,19)+",";
				var partFinal = moeda.value.substring(19);
				moeda.value = part1+part2+part3+partMeio+partFinal;
				console.log("12 Cont: " + cont);
				cont++;
				return;
			}
			
			//1 Trilhão
			if(cont == 13){
				var part1 = moeda.value.substring(0,4)+".";
				var part2 = moeda.value.substring(4,6)+moeda.value.substring(7,8)+".";
				var part3 = moeda.value.substring(8,10)+moeda.value.substring(11,12)+".";
				var part4 = moeda.value.substring(12,14)+moeda.value.substring(15,16)+".";
				var partMeio = moeda.value.substring(16, 18)+moeda.value.substring(19,20)+",";
				var partFinal = moeda.value.substring(20);
				moeda.value = part1+part2+part3+part4+partMeio+partFinal;
				console.log("13 Cont: " + cont);
				cont++;
				return;
			}
			moeda.value = moeda.value.substring(0,5);
			console.log(moeda.value.substring(0,3)); 
			moeda.value+= atual+ultimo;
			if(cont == 0) cont++;			
		}
	}

}
