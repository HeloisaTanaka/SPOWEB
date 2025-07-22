const valores = [7.7, 8.9, 6.3, 9.2]
console.log(typeof valores)
console.log(valores[0], valores[3])
console.log(valores[4]) // não tem esse índice

valores[4] = 10         // incluindo valores
console.log(valores[4]) // exibindo índice 4

valores[10] = 29        // de 5 a 9 ficará com empty items, no índice 10 ficará com 20
console.log(valores)

console.log(valores.length) // tamanho/ número de itens do array

// inserindo masi valores no array
valores.push({id: 3}, false, null, 'teste') //{id: 3} é um objeto adicionada ao array, apesar de ser um array do tipo função
console.log(valores)                        //esse objeto é usado como chave e valor = id é um atributo do objeto, o 3 é o valor do atributo
                                            //se procurar por um objeto cujo atributo id seja igual a 3, é o objeto armazenado na lista
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)

//Strings não podem ser alteradas por índice