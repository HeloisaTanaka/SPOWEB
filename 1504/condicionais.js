// Simples: se condição (verdadeira):
// Composta: senão (ignora a verdadeira e executa a falsa)
// Encadeado: se senão (ignora a verdadeira se for falso e executa a próxima caso cumpra a condição)

let a = 1
let b = 3
let c = 8

if (a>b){
    console.log(a + '>' + b)
}
else if(a>c){
    console.log(a + '>' + c)
}
else {
    console.log(a + ' é o menor número')
}