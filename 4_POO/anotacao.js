// Array é uma lista em js, é um vetor.
// Array também é uma classe, logo possui métodos e atributos.
// Armazena um conjunto de elementos diferentes (bool, inteiro, decimal, etc), organizados em índices
// Pode-se criar um array que armazena diferentes tipos de dados, embora NÃO SEJA UMA BOA PRÁTICA DE PROGRAMAÇÃO.
//      Deve-se criar um array para cada tipo (um para)

// const nome = new array('Maria', 'João') --> instancia/inicializar um novo array   
// armazenado no steck, pois declara-se um objeto
// nome é OBJETO, 
// o array() é o método contrutor da classe Array
// referencia a posição de memória onde é 
// nome não armazena o conteúdo, mas o endereço de memória
// Maria e João são os conteúdos de nome
// o const torna o objeto imutável, mas como o nome armazena um ENDEREÇO, é possível alterar seu conteúdo

// ou

// let lista = [1, 2, 3] --> pode ser armazenado em diferentes espaços da memória cada vez que o arquivo é compilado
// armazenado na heap, onde é escolhido um espaço de memória para ser armazenado a capa compilação.  
// Estrutura de função.
// Lista é uma FUNÇÃO
// armazena o CONTEÚDO, então se for declarado com const, não será possível alterá-los


// Classe: utiliza conceitos e palavras reservadas.
//         Possui nome, atributos e métodos (inclusive o contrutor)
//         visibilidade definida (pública +, package, protegido, pivate -)
//         no js é encapsulado, então não há acesso direto aos conteúdos da classe 
//               mas pode ser feito métodos que servem como "ponte" para acessar esses conteúdos

// Objective: superclasse que engloba demais classes
//            classes filhas do Objective: array, math.
            //math.floor(), o math faz uma chamada direta para o método floor da classe math? ///////////////

// método construtor: possui o mesmo nome da classe quando vazio
//                    exemplo: classe Array, método array()
//                    transforma um uma variável em um objeto daquela classe.

// new é anônimo, 

// Objeto: possui uma classe
//         referencia um espaço na memória

// Função: armazena Conteúdos