//Heloisa Lorencini Tanaka
var ganhar = false
var numeroSecreto
var tentativas
var palpites


document.getElementById("forms").addEventListener("submit", function(event){
   event.preventDefault()
})

document.getElementById("botao-play").addEventListener('click', function(){
   document.getElementById('tela-jogo').style.display = 'grid'
   document.getElementById("tela-play").style.display = 'none'
   comecarJogo()
})

document.getElementById('resetButton').addEventListener('click', function(){    
   comecarJogo() 
   document.getElementById("status").innerHTML = "Mais um round!" 
   document.getElementById("numero").value = "" 
   document.getElementById("valorTentativas").innerHTML = "10" 
   document.getElementById("numeroPalpites").innerHTML = ""
})

function verificarPalpite(numeroSecreto, numeroUsuario){
   if (numeroSecreto == numeroUsuario){
       ganhar = true
       document.getElementById("status").style.textAlign = 'center'
       document.getElementById("status").innerHTML = "Parabéns, você ganhou!"
   }
   else if (numeroSecreto > numeroUsuario){
       console.log('Numero secreto é maior')
       document.getElementById('status').innerHTML = "O número secreto é maior."
   }
   else {
       console.log('Numero secreto é menor')
       document.getElementById("status").innerHTML = "O número secreto é menor"
   }
}

function exibirMensagem(tentativas, palpites){
   document.getElementById("valorTentativas").innerHTML = tentativas
   document.getElementById("numeroPalpites").innerHTML = palpites
}

function comecarJogo(){
   numeroSecreto = Math.floor(Math.random() * 21)
   tentativas = 10
   palpites = []
   ganhar = false


   document.getElementById('enviar').removeEventListener("click", respondeClick);


   document.getElementById('enviar').addEventListener("click", respondeClick);
}

function respondeClick(){
   var numeroUsuario = document.getElementById("numero").value
   document.getElementById('numero').value = undefined

   if (!ganhar){
        if (numeroUsuario>=0 && numeroUsuario<=20){
            if (tentativas > 1){
                verificarPalpite(numeroSecreto, numeroUsuario)
                tentativas--
                palpites.push(numeroUsuario)
            } else {
                tentativas = 0
                document.getElementById("status").innerHTML = "Poxa, você perdeu... Tentativas esgotadas"
            }
            exibirMensagem(tentativas, palpites)
        } else {
            document.getElementById('status').innerHTML = 'Digite um número válido! (0 - 20)'
        }
    }
}
