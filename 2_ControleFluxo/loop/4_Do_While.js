//Utilizando o laço de repetição do...while, imprimima o primeiro número divisível ṕor 19
//Leve em consideração o valor do primeiro número 100 e do segundo número 200.

let cont = 100

do{
    ++cont
    if(cont%19==0){
        console.log(cont + " é o primeiro número divisível por 19 entre 100 e 200")
        break
    }
} while(cont<=200)