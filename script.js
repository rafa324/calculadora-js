// Teste de branch
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
}

// Função principal com callback
function calcularCallback(a, b, operacao) {
    return operacao(a, b);
}

// Função chamada pelo botão
function calcular() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;

    let resultado;

    if (operacao === "+") {
        resultado = calcularCallback(num1, num2, somar);
    } else if (operacao === "-") {
        resultado = calcularCallback(num1, num2, subtrair);
    } else if (operacao === "*") {
        resultado = calcularCallback(num1, num2, multiplicar);
    } else if (operacao === "/") {
        resultado = calcularCallback(num1, num2, dividir);
    }

    // Mostrar resultado
    document.getElementById("resultado").innerText = resultado;
}

// Limpar
 function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerText = "0";
 }
