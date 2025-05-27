//switch(variável){
//case valor_de_comparação: instrução
//                 break;
//case valor_de_comparação: instrução
//                 break;
//}


//Criando menu
console.log('Escolha \n')
console.log('(S) - Solteiro')
console.log('(C) - Casado')
console.log('(D) - Divorciado \n\n')

//Criar uma variável
let opcao = 'C'

// Switch: case(), default, break, continue
switch (opcao){ // float, int, char, string, bool
    case 'S': 
        console.log('Solteiro'); break;
    case 'C' : 
        console.log('Casado'); break;
    case 'D': 
        console.log('Divorciado'); break;
    default: 
        console.log('Outros');
} 