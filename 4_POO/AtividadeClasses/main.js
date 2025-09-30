import Fornecedor from "./Fornecedor.js";
import FornecedorEmpresa from "./FornecedorEmpresa.js";
import FornecedorPessoa from "./FornecedorPessoa.js";

const fornecedorEmpresa = new FornecedorEmpresa('Empresa', '(11)98376-8875', '12345678-9', '61.600.839/0001-55')
const fornecedorPessoa = new FornecedorPessoa('Rodrigo', '(11)91233-7716', '12 345 678-9', '123.456.789-09')

console.log('Fornecedor pessoa: ' + fornecedorPessoa.nome)
fornecedorPessoa.nome = 'Thiago'
console.log('Fornecedor pessoa: ' + fornecedorPessoa.nome)

console.log('Fornecedor empresa: ' + fornecedorEmpresa.nome)
fornecedorEmpresa.nome = 'AutoFacil'
console.log('Fornecedor empresa: ' + fornecedorEmpresa.nome)