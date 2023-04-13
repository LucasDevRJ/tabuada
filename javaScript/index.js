function calculaTabuada() {
	var campoNumero = document.querySelector("input");
	var tabuada = document.getElementById("tabuada").innerHTML;

	var numero = campoNumero.value;

	for (var antecessor = numero; antecessor >= 1; antecessor--) {
		for (var contador = 1; contador <= 10; contador++) {
			var conta = antecessor * contador;
			tabuada = tabuada + "<p>" + antecessor + " x " + contador + " = " + conta;
			document.getElementById("tabuada").innerHTML = tabuada;
		}
	}
}

var botao = document.querySelector("button");
botao.addEventListener("click", calculaTabuada);

