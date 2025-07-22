//Utilizando laço com continue

//criando contador
let cont = 0

while(cont <= 10){
    cont++
    if (cont%2==0){
        //break
        continue //volta para o while, por isso não exibe os números pares
    }
    console.log(cont)
}
