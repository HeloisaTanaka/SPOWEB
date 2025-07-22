//var input = document.getElementById("valor-brl")
//var valorDolar = document.getElementById("valor-dolar")
//var valorEuro = document.getElementById("valor-euro")
//var valorBitcoin = document.getElementById("valor-btc")

//input.addEventListener("input", function () {
//    var real = parseFloat(input.value)
//    dolar = real/5.49
//    euro = real/6.31
//    bitcoin = real/575000.00
//    valorDolar.innerHTML = dolar.toFixed(2)
//    valorEuro.innerHTML = euro.toFixed(2)
//    valorBitcoin.innerHTML = bitcoin.toFixed(2)
//});


var input = document.getElementById("valor-brl")
var valorDolar = document.getElementById("valor-dolar")
var valorEuro = document.getElementById("valor-euro")
var valorBit = document.getElementById("valor-btc")

function converteDolar(real) {
    dolar = real/5.49
    valorDolar.innerHTML = '$' + dolar.toFixed(2)
}

function converteEuro(real) {
    euro = real/6.25
    valorEuro.innerHTML = '€' + euro.toFixed(2)
}

function converteBit(real){
    bit = real/375000.00
    valorBit.innerHTML = '₿' + bit.toFixed(2)
}

addEventListener("input", function(){
    const real = parseFloat(input.value) 

    converteDolar(real)
    converteEuro(real)
    converteBit(real)
})
