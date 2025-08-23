//Helosia Lorencini Tanaka
var numeroSecreto
var numeroUsuario
var palpites
var tentativas
var vitoria

document.getElementById('botao-play').addEventListener('click', function(){
    document.getElementById('tela-play').style.display = 'none'
    document.getElementById('tela-jogo').style.display = 'grid'
    iniciarJogo()
})

document.getElementById('forms').addEventListener('submit', function(event){
    event.preventDefault()
})

function prepararElementos(){
    numeroSecreto = Math.floor(Math.random() * 21)
    palpites = []
    tentativas = 10
    vitoria = false
}

function verificarPalpite(numeroSecreto, numeroUsuario){
    if(numeroSecreto>numeroUsuario){
        document.getElementById('status').innerHTML = 'Número secreto é maior'
    }
    else if(numeroSecreto<numeroUsuario){
        document.getElementById('status').innerHTML = 'Número secreto é menor'
    }
    else {
        document.getElementById('status').innerHTML = 'Parabéns, você venceu!'
        vitoria = true
    }
}

function exibirElementos(tentativas, palpites){
    document.getElementById('numero').value = undefined
    document.getElementById('valorTentativas').innerHTML = tentativas
    document.getElementById('numeroPalpites').innerHTML = palpites.join(', ')
}

function iniciarJogo(){

    prepararElementos()

    document.getElementById('enviar').addEventListener('click', function(){
        if(tentativas>0){
            numeroUsuario = parseInt(document.getElementById('numero').value)
            if(numeroUsuario>=0 && numeroUsuario<=20 && numeroUsuario!=undefined){
                palpites.push(numeroUsuario)
                tentativas--
                exibirElementos(tentativas, palpites)
                verificarPalpite(numeroSecreto, numeroUsuario)
            }
        }
        if(tentativas==0 && vitoria==false){
            document.getElementById('status').innerHTML = 'Poxa... Você não é um bom adivinho'
        }
    })
} 

document.getElementById('resetButton').addEventListener('click', function(){
    prepararElementos()
    exibirElementos(tentativas, palpites)
    document.getElementById('status').innerHTML = 'Mais um round!'
})