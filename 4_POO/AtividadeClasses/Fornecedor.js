class Fornecedor{
    #nome
    #fone

    constructor(nome='Sem nome', fone="(00)0000-0000"){
        this.#nome = nome
        this.#fone = fone
    }

    get nome(){
        return this.#nome
    }

    get fone() {
        return this.#fone
    }

    set nome(novoNome){
        this.#nome = novoNome
    }

    set fone(novoFone){
        this.#fone = novoFone
    }
}

export default Fornecedor