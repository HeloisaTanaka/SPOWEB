// CLASSE
// Nome, Atributos e métodos
// Atributos: características do objeto
// Métodos: comportamento da classe
// TIPOS: interno ou externo
    //Interno: classe no arquivo
    //Externo: classe num arquivo estrangeiro

// Métodos e atributos possuem visibilidade: public (+) e private (-)
// * Definem a acessibilidade

// MÉTODOS
// Construtores
// Com retorno
// Srm retorno

class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca    //this.marca é o atributo, marca é a variável comum 
        this.modelo = modelo
        this.ano = ano
    }

    detalhesDoCarro(){
        return `Carro: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`
    }
}

const meuCarro = new Carro('Toyota', 'Corola', 2022)
console.log(meuCarro.detalhesDoCarro()) 