var tabuada = document.getElementById("tabuada").innerHTML;

function calculaTabuada() {
	var campoNumero = document.querySelector("input");
	
	var mensagem = document.getElementById("mensagem");
	var numero = campoNumero.value;

	if (numero.length == 0) {
		mensagem.textContent = "Digite algum número!";
	} else if (isNaN(numero)) {
		mensagem.textContent = "Digite somente números!";
	} else {
		mensagem.textContent = "";
		for (var contador = 1; contador <= 10; contador++) {
			var conta = numero * contador;
			tabuada = tabuada + "<p>" + numero + " x " + contador + " = " + conta + "</p>";
			document.getElementById("tabuada").innerHTML = tabuada;
		}
	}
}

function apagaTabuada() {
	tabuada = "";
	document.getElementById("tabuada").innerHTML = tabuada;
}

var botao = document.querySelector("button");
botao.addEventListener("click", calculaTabuada);