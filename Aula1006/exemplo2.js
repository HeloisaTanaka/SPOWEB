// Trabalhando com array e laço de repetição

const alunos = [
    {aluno: 'Henrique', nota: 8},
    {aluno: 'Anabela', nota: 10},
    {aluno: 'Fernandez', nota: 10},
    {aluno: 'Bianca', nota:9}
]   

let index = 0
let somaDasNotas = 0
let totalAluno = alunos.length

// Utilizando o laço de repetição
do {
    somaDasNotas += alunos[index].nota
    index ++
} while(index<totalAluno);

let media = somaDasNotas/totalAluno

console.log(media)