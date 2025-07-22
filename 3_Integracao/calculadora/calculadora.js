let mensagem = document.getElementById("mensagem").textContent = "Seja bem-vindo"
let resultado = 0

function mostrarSoma(num1, num2) {
    resultado = num1+num2
    document.getElementById("resultado").textContent = "O resultado da soma entre " + num1 + " e " + num2 + " é : " + resultado
}

function mostrarSub(num1, num2) {
    resultado = num1-num2
    document.getElementById("resultado").textContent = "O resultado da subtração entre " + num1 + " e " + num2 + " é : " + resultado
}

function mostrarMult(num1, num2) {
    resultado = num1*num2
    document.getElementById("resultado").textContent = "O resultado da multiplicação entre " + num1 + " e " + num2 + " é : " + resultado
}

function mostrarDivisao(num1, num2) {
    resultado = num1/num2
    document.getElementById("resultado").textContent = "O resultado da divisão entre " + num1 + " e " + num2 + " é : " + resultado
}

function inicio() {
    document.getElementById("content").textContent = "Seja bem vindo"
}

function calcular(){
    let operacao = parseInt(document.getElementById("operacao").value)
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    switch (operacao) {
        case 1:
            mostrarSoma(num1, num2)
            break
        case 2:
            mostrarSub(num1, num2)
            break
        case 3:
            mostrarMult(num1, num2)
            break
        case 4:
            if (num2 != 0)
                mostrarDivisao(num1, num2)
            document.getElementById('resultado').textContent = "Erro, dividendo deve ser diferente de 0"
            break
        case 5:
            document.getElementById('content').textContent = "Obrigada pela preferência"
            break
    }
}


