// Gera número aleatório entre 0 e 99
let numeroSecreto = Math.floor(Math.random() * 100);

function verificar() {
    let input = document.getElementById("inputNumero").value;
    let resultado = document.getElementById("resultado");

    let numero = Number(input);

    if (numero === numeroSecreto) {
        resultado.innerHTML = "🎉 Você acertou!";
    } else if (numero > numeroSecreto) {
        resultado.innerHTML = "📉 O número é menor!";
        document.getElementById("container")
            .style.setProperty("background-color", "red");
    } else {
        resultado.innerHTML = "📈 O número é maior!";
        document.getElementById("container")
            .style.setProperty("background-color", "red");
    }
}