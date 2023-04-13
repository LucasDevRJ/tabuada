function calculaTabuada() {
	var campoNumero = document.querySelector("input");

	var numero = campoNumero.value;

	console.log(numero);
}

var botao = document.querySelector("button");
botao.addEventListener("click", calculaTabuada);