import Fornecedor from "./Fornecedor.js"

class FornecedorEmpresa extends Fornecedor{
    #ie
    #cnpj

    constructor(nome, fone, ie, cnpj){
        super(nome, fone)
        this.#ie = ie
        this.#cnpj = cnpj
    }

    get ie(){
        return this.#ie
    }

    get cnpj(){
        return this.#cnpj
    }

    set ie(novoIe){
        this.#ie = novoIe
    }

    set cnpj(novoCnpj){
        this.#cnpj = novoCnpj
    }
}

export default FornecedorEmpresa