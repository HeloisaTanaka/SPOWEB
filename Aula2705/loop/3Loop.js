//Vetor = array unidimencional = pode ser um conjunto de caracteres
//array é estático e só aceita um tipo de variável
//char nome[número máximo de chars] 

//Quando uma variável sofre ação de métodos (charAt()), ela passa a ser considerada
//um objeto de uma classe predefinida pela linguagem (string, int, etc)


//Validação de sexo

//criando laço do while
do{
    let texto = 'Feminino' //texto é um objeto da classe string, 'Feminino' é um array
    sexo = texto.charAt(0) 

    if(sexo!='F' && sexo!='M'){
        console.log("Erro, Validação do Sexo")
    }
} while(sexo!='F' && sexo!='M')

console.log('Sexo validado')

//Revisar se texto é lista ou array