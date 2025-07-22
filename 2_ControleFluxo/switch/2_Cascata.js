//Estações do ano
//criando variável
// '' é para CHAR enquanto que " " é para STRING
//Caso o case seja satisfeito, ele realizará a próxima instrução, mesmo que não esteja em seu case

let mes = 'Setembro'

switch(mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Dezembro":
        console.log('Verão') //uma ação que é comum em alguns cases, só precisa ser escrita uma vez os meses acima deste console
        break                //são todos de verão, logo se o parâmetro do switch for == a algum desses case, retorna
    case "Abril":
    case "Maio":
    case "Marco":
        console.log('Outono') //uma ação que é comum em alguns cases, só precisa ser escrita uma vez
        break
    case "Julho":
    case "Agosto":
    case "Junho":
        console.log('Inverno') //uma ação que é comum em alguns cases, só precisa ser escrita uma vez
        break
    case "Outubro":
    case "Novembro":
    case "Setembro":
        console.log('Primavera') //uma ação que é comum em alguns cases, só precisa ser escrita uma vez
        break
}