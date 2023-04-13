function calculaTabuada() {
	var campoNumero = document.querySelector("input");
	var tabuada = document.getElementById("tabuada").innerHTML;

	var numero = campoNumero.value;

	for (var contador = 1; contador <= 10; contador++) {
		var conta = numero * contador;
		tabuada = tabuada + "<p>" + numero + " x " + contador + " = " + conta + "</p>";
		document.getElementById("tabuada").innerHTML = tabuada;
	}
}

var botao = document.querySelector("button");
botao.addEventListener("click", calculaTabuada);

