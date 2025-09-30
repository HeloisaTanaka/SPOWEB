import Fornecedor from './Fornecedor.js'

class FornecedorPessoa extends Fornecedor{
    #rg
    #cpf

    constructor(nome, fone, rg, cpf){
        super(nome, fone)
        this.#rg = rg
        this.#cpf = cpf
    }

    get rg(){
        return this.#rg
    }

    get cpf(){
        return this.#cpf
    }

    set rg(novoRg){
        this.#rg = novoRg
    }

    set cpf(novoCpf){
        this.#cpf = novoCpf
    }
}

export default FornecedorPessoa